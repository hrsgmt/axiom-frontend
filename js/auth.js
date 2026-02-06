import { api } from "./api.js";

document.querySelector("button").onclick = async () => {
  const email = document.querySelector("input[type=email]").value;
  const password = document.querySelector("input[type=password]").value;

  try {
    const data = await api("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });

    localStorage.setItem("token", data.token);
    location.href = "/dashboard.html";
  } catch {
    document.body.innerHTML += "<p>❌ Login failed</p>";
  }
};
