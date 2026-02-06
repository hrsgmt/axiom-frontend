const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "/index.html";
}

fetch("https://axiom-backend-cnkz.onrender.com/api/me", {
  headers: {
    "Authorization": "Bearer " + token
  }
})
.then(r => r.json())
.then(data => {
  if (data.error) {
    localStorage.removeItem("token");
    window.location.href = "/index.html";
    return;
  }

  document.getElementById("data").textContent =
    JSON.stringify(data, null, 2);
})
.catch(() => {
  localStorage.removeItem("token");
  window.location.href = "/index.html";
});
