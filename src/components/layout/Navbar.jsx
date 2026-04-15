"use client";

import * as Icons from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const getLinkClass = (href) => {
		const isActive = pathname === href;
		return `text-sm font-semibold transition-all px-3 py-2 rounded-md ${
			isActive ?
				"bg-green-800 text-white"
			:	"text-gray-600 hover:text-white hover:bg-green-700"
		}`;
	};

	const getMobileLinkClass = (href) => {
		const isActive = pathname === href;
		return `block px-3 py-2 rounded-md text-base font-medium transition-all ${
			isActive ?
				"bg-green-600 text-white"
			:	"text-gray-600 hover:bg-green-100 hover:text-green-700"
		}`;
	};

	const navLinks = [
		{ href: "/", label: "Home", icon: "Home" },
		{ href: "/timeline", label: "Timeline", icon: "Clock" },
		{ href: "/analytics", label: "Stats", icon: "BarChart3" },
	];

	return (
		<nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="shrink-0 flex items-center">
						<Link
							href="/"
							className="font-bold text-xl text-gray-900 tracking-tight hover:text-green-700 transition-colors">
							KeenKeeper
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden sm:flex items-center space-x-4">
						{navLinks.map((link) => {
							const Icon = Icons[link.icon];

							return (
								<Link
									key={link.href}
									href={link.href}
									className={getLinkClass(link.href)}>
									<div className="flex items-center gap-1">
										{Icon && <Icon size={16} />}
										{link.label}
									</div>
								</Link>
							);
						})}
					</div>

					<div className="sm:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-green-700 transition-all">
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
						{navLinks.map((link) => {
							const Icon = Icons[link.icon];

							return (
								<Link
									key={link.href}
									href={link.href}
									className={getMobileLinkClass(link.href)}
									onClick={() => setIsOpen(false)}>
									<div className="flex items-center gap-2">
										{Icon && <Icon size={18} />}
										{link.label}
									</div>
								</Link>
							);
						})}
					</div>
				)}
			</div>
		</nav>
	);
}
