import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    env: {
        RPC_SERVER: process.env.RPC_SERVER,
    },
    images: {
        remotePatterns: [
            new URL("https://raw.githubusercontent.com/ArknightsAssets/ArknightsAssets2/refs/heads/cn/assets/dyn/arts/charavatars/*"),
        ],
    },
};

export default nextConfig;
