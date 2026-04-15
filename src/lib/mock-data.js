export const mockFriends = [
	{
		id: "1",
		name: "David Kim",
		avatar: "https://i.pravatar.cc/150?u=12",
		tags: ["WORK"],
		status: "Almost Due",
		lastCheckIn: "62d ago",
		relationshipScore: 85,
		goals: 2,
		actionItems: 1,
		quote: '"Great designer and collaborator"',
		preferredContact: "slack",
		daysSinceContact: 62,
		goalDays: 30,
		nextDue: "Feb 27, 2026",
	},
	{
		id: "2",
		name: "Emma Wilson",
		avatar: "https://i.pravatar.cc/150?u=1",
		tags: ["FAMILY"],
		status: "Overdue",
		lastCheckIn: "62d ago",
		relationshipScore: 60,
		goals: 1,
		actionItems: 3,
		quote: '"Former colleague, great mentor"',
		preferredContact: "email",
		daysSinceContact: 62,
		goalDays: 30,
		nextDue: "Feb 27, 2026",
	},
	{
		id: "3",
		name: "Lisa Nakamura",
		avatar: "https://i.pravatar.cc/150?u=24",
		tags: ["WORK"],
		status: "Overdue",
		lastCheckIn: "62d ago",
		relationshipScore: 80,
		goals: 2,
		actionItems: 1,
		quote: '"Always has the best book recommendations"',
		preferredContact: "phone",
		daysSinceContact: 62,
		goalDays: 30,
		nextDue: "Feb 27, 2026",
	},
	{
		id: "4",
		name: "James Wright",
		avatar: "https://i.pravatar.cc/150?u=25",
		tags: ["HOBBY", "TRAVEL"],
		status: "Overdue",
		lastCheckIn: "62d ago",
		relationshipScore: 95,
		goals: 3,
		actionItems: 0,
		quote: '"Travel buddy and foodie"',
		preferredContact: "text",
		daysSinceContact: 62,
		goalDays: 30,
		nextDue: "Feb 27, 2026",
	},

	{
		id: "5",
		name: "David Kim",
		avatar: "https://i.pravatar.cc/150?u=13",
		tags: ["WORK"],
		status: "Overdue",
		lastCheckIn: "62d ago",
		relationshipScore: 85,
		goals: 2,
		actionItems: 1,
		quote: '"Great designer and collaborator"',
		preferredContact: "slack",
		daysSinceContact: 62,
		goalDays: 30,
		nextDue: "Feb 27, 2026",
	},
	{
		id: "6",
		name: "Emma Wilson",
		avatar: "https://i.pravatar.cc/150?u=14",
		tags: ["FAMILY"],
		status: "On-Track",
		lastCheckIn: "62d ago",
		relationshipScore: 60,
		goals: 1,
		actionItems: 3,
		quote: '"Former colleague, great mentor"',
		preferredContact: "email",
		daysSinceContact: 5,
		goalDays: 30,
		nextDue: "Mar 15, 2026",
	},
	{
		id: "7",
		name: "Lisa Nakamura",
		avatar: "https://i.pravatar.cc/150?u=15",
		tags: ["WORK"],
		status: "On-Track",
		lastCheckIn: "62d ago",
		relationshipScore: 80,
		goals: 2,
		actionItems: 1,
		quote: '"Always has the best book recommendations"',
		preferredContact: "phone",
		daysSinceContact: 12,
		goalDays: 60,
		nextDue: "Apr 10, 2026",
	},
	{
		id: "8",
		name: "James Wright",
		avatar: "https://i.pravatar.cc/150?u=16",
		tags: ["HOBBY", "TRAVEL"],
		status: "Almost Due",
		lastCheckIn: "62d ago",
		relationshipScore: 95,
		goals: 3,
		actionItems: 0,
		quote: '"Travel buddy and foodie"',
		preferredContact: "text",
		daysSinceContact: 28,
		goalDays: 30,
		nextDue: "Feb 29, 2026",
	},

	{
		id: "9",
		name: "David Kim",
		avatar: "https://i.pravatar.cc/150?u=17",
		tags: ["WORK"],
		status: "Almost Due",
		lastCheckIn: "62d ago",
		relationshipScore: 85,
		goals: 2,
		actionItems: 1,
		quote: '"Great designer and collaborator"',
		preferredContact: "slack",
		daysSinceContact: 62,
		goalDays: 30,
		nextDue: "Feb 27, 2026",
	},
	{
		id: "10",
		name: "Emma Wilson",
		avatar: "https://i.pravatar.cc/150?u=18",
		tags: ["FAMILY"],
		status: "Overdue",
		lastCheckIn: "62d ago",
		relationshipScore: 60,
		goals: 1,
		actionItems: 3,
		quote: '"Former colleague, great mentor"',
		preferredContact: "email",
		daysSinceContact: 62,
		goalDays: 30,
		nextDue: "Feb 27, 2026",
	},
	{
		id: "11",
		name: "Lisa Nakamura",
		avatar: "https://i.pravatar.cc/150?u=19",
		tags: ["WORK"],
		status: "Overdue",
		lastCheckIn: "62d ago",
		relationshipScore: 80,
		goals: 2,
		actionItems: 1,
		quote: '"Always has the best book recommendations"',
		preferredContact: "phone",
		daysSinceContact: 62,
		goalDays: 30,
		nextDue: "Feb 27, 2026",
	},
	{
		id: "12",
		name: "James Wright",
		avatar: "https://i.pravatar.cc/150?u=20",
		tags: ["HOBBY", "TRAVEL"],
		status: "On-Track",
		lastCheckIn: "62d ago",
		relationshipScore: 95,
		goals: 3,
		actionItems: 0,
		quote: '"Travel buddy and foodie"',
		preferredContact: "text",
		daysSinceContact: 2,
		goalDays: 30,
		nextDue: "Mar 20, 2026",
	},
];

const globalForMock = globalThis;

if (!globalForMock.mockInteractions) {
	globalForMock.mockInteractions = [];
}

export let mockInteractions = globalForMock.mockInteractions;

export async function getInteractions() {
	return mockInteractions;
}

export async function fetchFriends() {
	return new Promise((resolve) => setTimeout(() => resolve(mockFriends), 1500));
}

export async function fetchFriendById(id) {
	return new Promise((resolve) =>
		setTimeout(() => resolve(mockFriends.find((f) => f.id === id)), 800)
	);
}

export async function fetchTimeline() {
	return new Promise((resolve) =>
		setTimeout(() => resolve(mockInteractions), 1000)
	);
}

export async function fetchAnalyticsData() {
	return new Promise((resolve) => {
		const onTrackCount = mockFriends.filter(
			(f) => f.status === "On-Track"
		).length;
		const almostDueCount = mockFriends.filter(
			(f) => f.status === "Almost Due"
		).length;
		const overdueCount = mockFriends.filter(
			(f) => f.status === "Overdue"
		).length;

		setTimeout(
			() =>
				resolve([
					{ name: "On-Track", value: onTrackCount, fill: "#2d5a45" },
					{ name: "Almost Due", value: almostDueCount, fill: "#eab308" },
					{ name: "Overdue", value: overdueCount, fill: "#ef4444" },
				]),
			800
		);
	});
}
