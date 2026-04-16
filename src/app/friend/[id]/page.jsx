"use client";

import { addInteraction } from "@/lib/local-data";
import { fetchFriendById } from "@/lib/mock-data";
import {
	Archive,
	ArrowLeft,
	Bell,
	Mail,
	MessageSquare,
	Phone,
	Trash2,
	Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function FriendDetail() {
	const params = useParams();
	const router = useRouter();
	const [friend, setFriend] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function load() {
			if (params.id) {
				const data = await fetchFriendById(params.id);
				setFriend(data || null);
			}
			setLoading(false);
		}
		load();
	}, [params.id]);

	const handleQuickAction = (type) => {
		if (!friend) return;
		addInteraction(friend.id, friend.name, friend.avatar, type);

		const icons = { call: "📞", text: "💬", video: "📹" };
		toast.success(`${icons[type]} ${type} with ${friend.name} logged!`, {
			duration: 2000,
		});
	};

	if (loading) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2d5a45]"></div>
			</div>
		);
	}

	if (!friend) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<h2 className="text-2xl font-bold mb-4">Friend not found</h2>
					<Link
						href="/"
						className="text-[#2d5a45] hover:underline">
						← Back to home
					</Link>
				</div>
			</div>
		);
	}

	// Status colors
	const statusColors = {
		Overdue: "bg-red-500",
		"Almost Due": "bg-yellow-500",
		"On-Track": "bg-[#2d5a45]",
	};

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
			<div className="max-w-5xl mx-auto">
				{/* Back Button */}
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors">
					<ArrowLeft size={20} />
					<span className="text-sm font-medium">Back to Friends</span>
				</Link>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
					{/* Left Sidebar - 4 columns */}
					<div className="lg:col-span-4 space-y-4">
						{/* Profile Card */}
						<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
							{/* Avatar */}
							<div className="relative w-24 h-24 mx-auto mb-4">
								<Image
									src={friend.avatar}
									alt={friend.name}
									fill
									className="object-cover rounded-full"
								/>
							</div>

							{/* Name */}
							<h1 className="text-xl font-bold text-gray-900 mb-3">
								{friend.name}
							</h1>

							{/* Status Badge - Red for Overdue */}
							<span
								className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-3 ${statusColors[friend.status] || "bg-gray-500"}`}>
								{friend.status}
							</span>

							<div className="flex flex-wrap justify-center gap-2 mb-4">
								{friend.tags?.map((tag) => (
									<span
										key={tag}
										className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
										{tag}
									</span>
								))}
							</div>

							{/* Quote */}
							<p className="text-gray-500 text-sm italic mb-2">
								{friend.quote}
							</p>

							{/* Preferred Contact */}
							<div className="flex items-center justify-center gap-2 text-gray-400 text-xs mt-4">
								<Mail size={12} />
								<span>Preferred: {friend.preferredContact}</span>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="space-y-3">
							<button className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm">
								<Bell
									size={18}
									className="text-gray-600"
								/>
								<span className="text-sm font-semibold text-gray-700">
									Snooze 2 Weeks
								</span>
							</button>

							<button className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm">
								<Archive
									size={18}
									className="text-gray-600"
								/>
								<span className="text-sm font-semibold text-gray-700">
									Archive
								</span>
							</button>

							<button className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-red-50 transition-colors shadow-sm group">
								<Trash2
									size={18}
									className="text-red-500"
								/>
								<span className="text-sm font-semibold text-red-500 group-hover:text-red-600">
									Delete
								</span>
							</button>
						</div>
					</div>

					{/* Right Content - 8 columns */}
					<div className="lg:col-span-8 space-y-6">
						{/* Stats Row - 3 Cards */}
						<div className="grid grid-cols-3 gap-4">
							<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
								<div className="text-3xl font-bold text-[#2d5a45] mb-1">
									{friend.daysSinceContact}
								</div>
								<div className="text-xs text-gray-500 font-medium">
									Days Since Contact
								</div>
							</div>

							<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
								<div className="text-3xl font-bold text-[#2d5a45] mb-1">
									{friend.goalDays}
								</div>
								<div className="text-xs text-gray-500 font-medium">
									Goal (Days)
								</div>
							</div>

							<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
								<div className="text-xl font-bold text-[#2d5a45] mb-1">
									{friend.nextDue}
								</div>
								<div className="text-xs text-gray-500 font-medium">
									Next Due
								</div>
							</div>
						</div>

						{/* Relationship Goal Card */}
						<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
							<div className="flex items-center justify-between mb-4">
								<h2 className="text-base font-bold text-gray-900">
									Relationship Goal
								</h2>
								<button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-lg transition-colors">
									Edit
								</button>
							</div>
							<p className="text-gray-600 text-sm">
								Connect every{" "}
								<span className="font-semibold text-gray-900">
									{friend.goalDays} days
								</span>
							</p>
						</div>

						{/* Quick Check-In */}
						<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
							<h2 className="text-base font-bold text-gray-900 mb-6">
								Quick Check-In
							</h2>

							<div className="grid grid-cols-3 gap-4">
								{[
									{ type: "call", icon: Phone, label: "Call" },
									{ type: "text", icon: MessageSquare, label: "Text" },
									{ type: "video", icon: Video, label: "Video" },
								].map(({ type, icon: Icon, label }) => (
									<button
										key={type}
										onClick={() => handleQuickAction(type)}
										className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-50 hover:bg-white border border-gray-200 hover:border-gray-300 rounded-xl transition-all group">
										<Icon
											size={24}
											className="text-gray-700 stroke-[1.5] group-hover:text-[#2d5a45] transition-colors"
										/>
										<span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
											{label}
										</span>
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
