import { api } from "./api.js";

document.querySelector("button").onclick = async () => {
  const email = document.querySelector("input[type=email]").value;
  const password = document.querySelector("input[type=password]").value;

  const res = await fetch("https://axiom-backend-cnkz.onrender.com/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);

  location.href = "/dashboard.html";
};
