"use client";

import { mockInteractions } from "./mock-data"; // mock data import করো

const STORAGE_KEY = "friendship_interactions";

export function getInteractions() {
	if (typeof window === "undefined") return mockInteractions; // SSR এর জন্য mock data

	try {
		const stored = localStorage.getItem(STORAGE_KEY);

		// যদি localStorage খালি থাকে, তাহলে mock data দিয়ে seed করো
		if (!stored) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(mockInteractions));
			return mockInteractions;
		}

		return JSON.parse(stored);
	} catch {
		return mockInteractions;
	}
}

export function addInteraction(friendId, friendName, friendAvatar, type) {
	const actionLabel = type.charAt(0).toUpperCase() + type.slice(1);

	const newInteraction = {
		id: Date.now().toString(36),
		friendId,
		friendName,
		friendAvatar,
		type,
		title: `${actionLabel} with ${friendName}`,
		date: new Date().toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		}),
		timestamp: Date.now(),
	};

	const current = getInteractions();
	const updated = [newInteraction, ...current];
	localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

	window.dispatchEvent(new CustomEvent("interactionsUpdated"));
	return newInteraction;
}

export function deleteInteraction(id) {
	const current = getInteractions();
	const updated = current.filter((i) => i.id !== id);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
	window.dispatchEvent(new CustomEvent("interactionsUpdated"));
}
