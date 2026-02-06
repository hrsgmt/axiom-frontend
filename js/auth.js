import { api } from "./api.js";

document.querySelector("button").onclick = async () => {
  const email = document.querySelector("input[type=email]").value;
  const password = document.querySelector("input[type=password]").value;

  try {
    const data = await api("/api/auth/login", {
      method: "POST",
      body: { email, password }
    });

    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  } catch (e) {
    alert("❌ Login failed");
    console.error(e);
  }
};
