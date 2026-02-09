const API = "https://axiom-backend-v1.onrender.com";

window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("loginBtn");

  if (!btn) {
    alert("Login button not found");
    return;
  }

  btn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(API + "/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    } else {
      alert(data.error || "Login failed");
    }
  });
});
