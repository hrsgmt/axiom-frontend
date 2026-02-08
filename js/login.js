const form = document.getElementById("loginForm");
const output = document.getElementById("output");

function show(msg) {
  console.log(msg);
  output.innerText = JSON.stringify(msg, null, 2);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    show("STEP 1 → sending login");

    const res = await fetch("https://axiom-backend-final.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    show({ loginResponse: data });

    if (!data.token) {
      show("NO TOKEN");
      return;
    }

    localStorage.setItem("token", data.token);
    show("STEP 2 → token saved");

    const me = await fetch("https://axiom-backend-final.onrender.com/api/me", {
      headers: { Authorization: "Bearer " + data.token }
    });

    const meData = await me.json();
    show({ meResponse: meData });

  } catch (err) {
    show({ error: err.message });
  }
});
