/**
 * Absolute origin of the deployed site, without a trailing slash.
 * SITE_URL wins; Netlify's build-time URL is the fallback.
 */
const raw =
  process.env.SITE_URL ?? process.env.URL ?? "http://localhost:3000";

export const siteUrl = raw.replace(/\/+$/, "");

export const absoluteUrl = (path = "/") =>
  `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
