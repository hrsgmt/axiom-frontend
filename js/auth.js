import { api } from "./api.js";

document.getElementById("loginBtn").onclick = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const out = document.getElementById("out");

  out.textContent = "Logging in...";

  try {
    const data = await api("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });

    localStorage.setItem("token", data.token);
    location.href = "/dashboard.html";

  } catch (e) {
    out.textContent = "❌ Login failed";
  }
};
