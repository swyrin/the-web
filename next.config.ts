import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: "standalone",
    images: {
        unoptimized: true
    },
    experimental: {
        typedRoutes: true
    },

    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "false" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "*" },
                    { key: "Access-Control-Allow-Headers", value: "*" }
                ]
            },
            {
                source: "/:path*\\.(jpg|png)",
                headers: [
                    { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
                ]
            }
        ];
    }
};

export default nextConfig;
