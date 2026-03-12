import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "";

export const http = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Normalize error messages a bit for UI usage
export function getErrorMessage(err, fallback = "Something went wrong") {
  return (
    err?.response?.data?.message ||
    err?.response?.data?.Message ||
    err?.message ||
    fallback
  );
}
