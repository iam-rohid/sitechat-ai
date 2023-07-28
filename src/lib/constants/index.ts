export const APP_NAME = "SiteChat AI";

export const LOCALHOST = "localhost:3000";
export const DOMAIN = "sitechat-ai.com";

export const HOME_HOSTNAMES = new Set([LOCALHOST, DOMAIN]);
export const HOME_DOMAIN =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? `https://${DOMAIN}`
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : `http://${LOCALHOST}`;

export const APP_HOSTNAMES = new Set([
  `app.${LOCALHOST}`,
  `app.${DOMAIN}`,
  `preview.${DOMAIN}`,
]);
export const APP_DOMAIN =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? `https://app.${DOMAIN}`
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? `https://preview.${DOMAIN}`
    : `http://app.${LOCALHOST}`;

export const RESURVED_APP_PATH_KEYS = new Set(["signin", "settings", "new"]);

export const ADMIN_HOSTNAMES = new Set([
  `admin.${LOCALHOST}`,
  `admin.${DOMAIN}`,
]);

export const AUTH_PATHNAMES = new Set(["/signin"]);

export const SYSTEM_THEME = "system";
export const THEMES = new Set([SYSTEM_THEME, "light", "dark"]);
export const STORAGE_KEY = "theme";
