"use client";

import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";

export function AnalyticsChart({ data }) {
	return (
		<div className="w-full h-80">
			<ResponsiveContainer
				width="100%"
				height="100%">
				<PieChart>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						innerRadius={80}
						outerRadius={110}
						paddingAngle={5}
						dataKey="value">
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={entry.fill}
								stroke="none"
							/>
						))}
					</Pie>
					<Tooltip
						contentStyle={{
							borderRadius: "8px",
							border: "1px solid #f3f4f6",
							boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
						}}
						itemStyle={{ fontWeight: 600 }}
					/>
					<Legend
						verticalAlign="bottom"
						height={36}
						iconType="circle"
						formatter={(value) => (
							<span className="text-gray-700 font-medium ml-1">{value}</span>
						)}
					/>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}
