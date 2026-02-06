const API_BASE = "https://axiom-backend-cnkz.onrender.com";

export async function api(path, options = {}) {
  const res = await fetch(API_BASE + path, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}
