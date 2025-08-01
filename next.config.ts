import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: "standalone",
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
            }
        ];
    },

    async rewrites() {
        return [
            {
                source: "/contest/democracy",
                destination: "/contest/voting"
            },
            {
                source: "/contest/podium",
                destination: "/contest/standing"
            }
        ];
    }
};

export default nextConfig;
