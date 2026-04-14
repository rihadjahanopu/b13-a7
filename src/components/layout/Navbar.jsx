"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const getLinkClass = (href) => {
		const isActive = pathname === href;
		return `text-sm font-semibold transition-colors ${
			isActive ?
				"bg-green-800 text-white px-3 py-2 rounded-md"
			:	"text-gray-600 hover:text-gray-900"
		}`;
	};

	const getMobileLinkClass = (href) => {
		const isActive = pathname === href;
		return `block px-3 py-2 rounded-md text-base font-medium ${
			isActive ? "bg-green-500 text-white" : "text-gray-600 hover:bg-gray-50"
		}`;
	};

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/timeline", label: "Timeline" },
		{ href: "/analytics", label: "Analytics" },
	];

	return (
		<nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="shrink-0 flex items-center">
						<Link
							href="/"
							className="font-bold text-xl text-gray-900 tracking-tight">
							KeenKeeper
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden sm:flex items-center space-x-4">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={getLinkClass(link.href)}>
								{link.label}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<div className="sm:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors">
							<span className="sr-only">Open menu</span>
							<svg
								className={`h-6 w-6 transition-transform ${
									isOpen ? "rotate-90" : ""
								}`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="sm:hidden pb-3 space-y-1">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={getMobileLinkClass(link.href)}
								onClick={() => setIsOpen(false)}>
								{link.label}
							</Link>
						))}
					</div>
				)}
			</div>
		</nav>
	);
}
