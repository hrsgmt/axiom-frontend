const API = "https://axiom-backend-cnkz.onrender.com";

async function refreshAccess() {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) throw new Error("No refresh");

  const res = await fetch(API + "/api/auth/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken })
  });

  const data = await res.json();
  localStorage.setItem("accessToken", data.accessToken);
  return data.accessToken;
}

export async function api(path, options = {}) {
  let token = localStorage.getItem("accessToken");

  let res = await fetch(API + path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    }
  });

  if (res.status === 401) {
    token = await refreshAccess();
    res = await fetch(API + path, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    });
  }

  return res.json();
}
