"use client";

import { deleteInteraction, getInteractions } from "@/lib/local-data";
import { ChevronDown, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TimelineClient() {
	const [interactions, setInteractions] = useState([]);
	const [filter, setFilter] = useState("All");

	useEffect(() => {
		Promise.resolve().then(() => {
			setInteractions(getInteractions());
		});

		const handleUpdate = () => {
			setInteractions(getInteractions());
		};

		window.addEventListener("interactionsUpdated", handleUpdate);
		window.addEventListener("storage", handleUpdate);

		return () => {
			window.removeEventListener("interactionsUpdated", handleUpdate);
			window.removeEventListener("storage", handleUpdate);
		};
	}, []);

	const filteredInteractions = interactions.filter((item) => {
		if (filter === "All") return true;
		return item.type?.toLowerCase() === filter.toLowerCase();
	});

	const getEmoji = (type) => {
		const map = { call: "📞", text: "💬", video: "📹", meetup: "🤝" };
		return map[type] || "💬";
	};

	const handleDelete = (id) => {
		deleteInteraction(id);
	};

	return (
		<div className="max-w-4xl mx-auto px-4 py-12">
			<h1 className="text-3xl font-bold text-gray-900 mb-8">Timeline</h1>

			<div className="mb-8">
				<div className="relative inline-block w-44">
					<select
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
						className="block w-full appearance-none bg-white border border-gray-200 text-gray-600 text-sm rounded-lg px-4 py-2.5 pr-10 outline-none focus:border-[#2d5a45] cursor-pointer">
						<option value="All">Filter timeline</option>
						<option value="Call">Call</option>
						<option value="Text">Text</option>
						<option value="Video">Video</option>
						<option value="Meetup">Meetup</option>
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
						<ChevronDown size={16} />
					</div>
				</div>
			</div>

			<div className="space-y-4">
				{filteredInteractions.length === 0 ?
					<div className="text-center py-16 bg-gray-50 rounded-xl">
						<p className="text-gray-500">No interactions yet</p>
						<Link
							href="/"
							className="text-[#2d5a45] hover:underline text-sm">
							Go add friends →
						</Link>
					</div>
				:	filteredInteractions.map((interaction) => (
						<div
							key={interaction.id}
							className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 py-2 flex items-center gap-4">
							<div className="text-3xl">{getEmoji(interaction.type)}</div>
							<div className="flex-1">
								<p className="font-semibold text-gray-900 capitalize">
									{interaction.type}{" "}
									<span className="text-gray-400 font-normal">with</span>{" "}
									<Link
										href={`/friend/${interaction.friendId}`}
										className="text-[#2d5a45] hover:underline">
										{interaction.friendName}
									</Link>
								</p>
								<p className="text-sm text-gray-500">{interaction.date}</p>
							</div>
							<button
								onClick={() => handleDelete(interaction.id)}
								className="p-2 text-gray-400 hover:text-red-500">
								<Trash2 size={18} />
							</button>
						</div>
					))
				}
			</div>
		</div>
	);
}
