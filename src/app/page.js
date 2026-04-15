import { fetchFriends } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const friends = await fetchFriends();

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold text-[#1a202c] mb-4 tracking-tight">
					Friends to keep close in your life
				</h1>
				<p className="text-gray-500 mb-8 max-w-2xl mx-auto text-[13px]">
					Your personal shelf of meaningful connections. Browse, tend, and
					nurture the
					<br />
					relationships that matter most.
				</p>
				<button className="px-5 py-2 bg-[#2d5a45] text-white rounded font-medium inline-flex items-center gap-2 hover:bg-[#1f4232] transition-colors shadow-sm text-sm">
					<Plus size={16} />
					Add a Friend
				</button>
			</div>

			<div className="bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-between p-8 mb-12 max-w-4xl mx-auto gap-4">
				<StatItem
					title="Total Friends"
					value={10}
				/>
				<StatItem
					title="On Track"
					value={3}
					color="text-[#2d5a45]"
				/>
				<StatItem
					title="Need Attention"
					value={6}
					color="text-gray-700"
				/>
				<StatItem
					title="Interactions This Month"
					value={12}
					color="text-gray-700"
				/>
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
		<div className="text-center flex-1 bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] py-8 border border-gray-50">
			<h3 className={cn("text-3xl font-bold mb-2", color)}>{value}</h3>
			<p className="text-gray-400 text-[13px]">{title}</p>
		</div>
	);
}

function FriendCard({ friend }) {
	return (
		<Link
			href={`/friend/${friend.id}`}
			className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group">
			<div className="w-20 h-20 rounded-full overflow-hidden mb-5">
				<Image
					src={friend.avatar}
					alt={friend.name}
					className="w-full h-full object-cover"
					width="80"
					height="80"
				/>
			</div>
			<h3 className="font-bold text-[#1a202c] text-[15px] mb-1">
				{friend.name}
			</h3>
			<p className="text-gray-400 text-[10px] mb-3">{friend.lastCheckIn}</p>

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
					friend.status === "Almost Due" && "bg-[#eab308]",
					friend.status === "Overdue" && "bg-[#ef4444]"
				)}>
				{friend.status}
			</span>
		</Link>
	);
}
