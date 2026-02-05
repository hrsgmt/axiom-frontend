import { requireAuth, logout } from "./auth.js";
import { apiGet } from "./api.js";

requireAuth();

const output = document.getElementById("output");
const logoutBtn = document.getElementById("logout");

logoutBtn.onclick = logout;

(async () => {
  const data = await apiGet("/api/me");
  output.textContent = JSON.stringify(data, null, 2);
})();
