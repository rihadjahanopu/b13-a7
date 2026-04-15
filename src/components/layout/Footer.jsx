import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
	return (
		<footer className="w-full bg-brand-900 text-white py-12 mt-auto">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
				<h2 className="text-6xl font-bold mb-4">KeenKeeper</h2>
				<p className="text-gray-100 text-sm mb-6 text-center ">
					Your personal shelf of meaningful connections. Browse, tend, and
					nurture the relationships that matter most.
				</p>
				<p className="text-lg  mb-2 text-center">Social Links</p>
				<div className="flex space-x-4 mb-8">
					<div className="w-8 h-8 rounded-full text-black bg-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
						<span className="sr-only">Twitter</span>
						<FaTwitter size={18} />
					</div>
					<div className="w-8 h-8 rounded-full text-black bg-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
						<span className="sr-only">Instagram</span>
						<FaInstagram size={18} />
					</div>
					<div className="w-8 h-8 rounded-full text-black bg-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
						<span className="sr-only">Facebook</span>
						<FaFacebook size={18} />
					</div>
				</div>
				<div className="w-full border-t border-white/10 pt-6 flex justify-between items-center text-xs text-gray-400">
					<p>© 2026 KeenKeeper. All rights reserved.</p>
					<div className="flex space-x-4">
						<Link
							href="#"
							className="hover:text-white transition-colors">
							Privacy Policy
						</Link>
						<Link
							href="#"
							className="hover:text-white transition-colors">
							Terms of Service
						</Link>
						<Link
							href="#"
							className="hover:text-white transition-colors">
							Cookeis
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
