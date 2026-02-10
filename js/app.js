const form = document.getElementById("loginForm");
const output = document.getElementById("output");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  output.textContent = "Logging in...";

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(
      "https://axiom-backend-fix.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      }
    );

    const data = await res.json();

    if (!res.ok) {
      output.textContent = "❌ " + JSON.stringify(data);
      return;
    }

    // SAVE TOKEN
    localStorage.setItem("token", data.token);

    // REDIRECT
    window.location.href = "/dashboard.html";

  } catch (err) {
    console.error(err);
    output.textContent = "❌ NETWORK ERROR";
  }
});
