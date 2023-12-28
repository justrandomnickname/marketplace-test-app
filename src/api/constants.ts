export const API =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BACKEND_PROD
    : process.env.NEXT_PUBLIC_BACKEND_LOCAL;
