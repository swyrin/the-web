/**
 * Get the production URL, **without trailing slash**.
 *
 * @returns The production site URL, **without trailing slash**.
 */
export const getProductionURL = () => {
    let url = process.env.NEXT_PUBLIC_SITE_URL
        ?? process.env.NEXT_PUBLIC_VERCEL_URL
        ?? "http://localhost:3000";

    url = url.startsWith("http") ? url : `https://${url}`;
    url = url.endsWith("/") ? url.slice(0, -1) : url;

    return url;
};
