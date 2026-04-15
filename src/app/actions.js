"use server";

import { mockInteractions } from "@/lib/mock-data";

export async function addInteraction(friendId, friendName, friendAvatar, type) {
	const actionLabel = type.charAt(0).toUpperCase() + type.slice(1);

	const newInteraction = {
		id: Math.random().toString(36).substr(2, 9),
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
	};

	mockInteractions.unshift(newInteraction);

	return {
		success: true,
		interaction: newInteraction,
		allInteractions: [...mockInteractions], // fresh copy
	};
}
