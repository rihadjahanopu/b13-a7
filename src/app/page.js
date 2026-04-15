import { fetchFriends } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const friends = await fetchFriends();

	const totalFriends = friends.length;

	const onTrack = friends.filter((f) => f.status === "On-Track").length;

	const needAttention = friends.filter(
		(f) => f.status === "Almost Due" || f.status === "Overdue"
	).length;

	const statsData = [
		{ title: "Total Friends", value: totalFriends },
		{ title: "On Track", value: onTrack, color: "text-[#2d5a45]" },
		{ title: "Need Attention", value: needAttention, color: "text-[#2d5a45]" },
		{ title: "Interactions This Month", value: 12, color: "text-[#2d5a45]" },
	];

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			{/* Header */}
			<div className="text-center mb-12">
				<h1 className="text-3xl sm:text-4xl font-bold text-[#1a202c] mb-4 tracking-tight">
					Friends to keep close in your life
				</h1>

				<p className="text-gray-500 mb-8 max-w-2xl mx-auto text-sm">
					Your personal shelf of meaningful connections. Browse, tend, and
					nurture the relationships that matter most.
				</p>

				<button className="px-5 py-2 bg-[#2d5a45] text-white rounded font-medium inline-flex items-center gap-2 hover:bg-[#1f4232] transition-colors shadow-sm text-sm">
					<Plus size={16} />
					Add a Friend
				</button>
			</div>

			<div className="bg-white rounded-xl mb-12 max-w-7xl mx-auto">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b-2 border-gray-100 pb-8">
					{statsData.map((item, index) => (
						<StatItem
							key={index}
							title={item.title}
							value={item.value}
							color={item.color}
						/>
					))}
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-xl font-bold text-gray-900 mb-6 text-left">
					Your Friends
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{friends.map((friend) => (
						<FriendCard
							key={friend.id}
							friend={friend}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

function StatItem({ title, value, color = "text-[#2d5a45]" }) {
	return (
		<div className=" text-center p-4 rounded-lg bg-white shadow hover:bg-gray-50 transition border border-gray-200">
			<h3
				className={cn(
					"text-xl sm:text-5xl  font-bold mb-1 text-[#2d5a45]",
					color
				)}>
				{value}
			</h3>
			<p className="text-gray-400 text-xs sm:text-sm">{title}</p>
		</div>
	);
}

function FriendCard({ friend }) {
	return (
		<Link
			href={`/friend/${friend.id}`}
			className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group">
			<div className="w-20 h-20 rounded-full overflow-hidden mb-5 relative">
				<Image
					src={friend.avatar}
					alt={friend.name}
					width={80}
					height={80}
					className="w-full h-full object-cover"
				/>
			</div>

			<h3 className="font-bold text-[#1a202c] text-sm mb-1 text-center">
				{friend.name}
			</h3>

			<p className="text-gray-400 text-xs mb-3">{friend.lastCheckIn}</p>

			<div className="flex gap-2 mb-4 flex-wrap justify-center">
				{friend.tags?.map((tag) => (
					<span
						key={tag}
						className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#cdedd9] text-[#2d5a45] uppercase">
						{tag}
					</span>
				))}
			</div>

			<span
				className={cn(
					"px-4 py-1 rounded-full text-[10px] font-bold text-white",
					friend.status === "On-Track" && "bg-[#2d5a45]",
					friend.status === "Almost Due" && "bg-yellow-500",
					friend.status === "Overdue" && "bg-red-500"
				)}>
				{friend.status}
			</span>
		</Link>
	);
}
