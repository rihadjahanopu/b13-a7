/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		// domains: ["i.pravatar.cc"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.pravatar.cc",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
