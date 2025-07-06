import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    env: {
        RPC_SERVER: process.env.RPC_SERVER || "ws://localhost:3000/trpc",
    },
};

export default nextConfig;
