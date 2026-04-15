"use client";

import { useState } from "react";

export default function TimelineClient({ initialInteractions }) {
	const [interactions, setInteractions] = useState(initialInteractions);

	const handleNewInteraction = (newInteraction) => {
		setInteractions((prev) => [newInteraction, ...prev]);
	};

	return (
		<div className="max-w-4xl mx-auto px-4 py-12">
			<h1 className="text-3xl font-bold text-[#2d5a45] mb-8">Timeline</h1>

			<div className="space-y-4">
				{interactions.map((interaction) => (
					<div
						key={interaction.id}
						className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 py-2 flex items-center gap-4">
						<div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl">
							{interaction.type === "call" && "📞"}
							{interaction.type === "text" && "💬"}
							{interaction.type === "video" && "🎥"}
						</div>

						<div className="flex-1">
							<h3 className="font-bold text-[#1a202c]">{interaction.title}</h3>
							<p className="text-sm text-gray-500">{interaction.date}</p>
						</div>

						<div className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
							<p>Edit</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
