import { API_URL } from "./config.js";

export async function api(path, options = {}) {
  const token = localStorage.getItem("token");

  options.headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {})
  };

  const res = await fetch(`${API_URL}${path}`, options);

  if (!res.ok) {
    const err = await res.json();
    throw err;
  }

  return res.json();
}
