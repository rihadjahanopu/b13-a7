"use server";

import { mockInteractions } from "@/lib/mock-data";
import { revalidatePath } from "next/cache";

export async function addInteraction(friendId, friendName, friendAvatar, type) {
	const actionLabel = type.charAt(0).toUpperCase() + type.slice(1);

	const newInteraction = {
		id: Math.random().toString(36).substr(2, 9),
		friendId,
		friendName,
		friendAvatar,
		type,
		// ✅ Title format: "Call with Alex Johnson"
		title: `${actionLabel} with ${friendName}`,
		date: new Date().toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		}),
		notes: `Quick ${type} check-in`,
	};

	mockInteractions.unshift(newInteraction);
	revalidatePath("/timeline");
	return { success: true, interaction: newInteraction };
}
