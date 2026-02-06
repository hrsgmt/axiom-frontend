import { api } from "./api.js";

(async () => {
  const token = localStorage.getItem("token");
  if (!token) return location.href = "/index.html";

  const data = await api("/api/me", {
    headers: { Authorization: "Bearer " + token }
  });

  document.body.innerHTML = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
})();
