const API = "https://axiom-backend-cnkz.onrender.com";

export async function apiGet(path) {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token");

  const res = await fetch(API + path, {
    headers: {
      "Authorization": "Bearer " + token
    }
  });

  if (!res.ok) throw new Error("Unauthorized");
  return res.json();
}
