const token = null;

if (!token) {
  location.href = "/";
}

fetch("https://axiom-backend-cnkz.onrender.com/api/me", {
  headers: {
    Authorization: "Bearer " + token
  }
})
.then(r => r.json())
.then(d => {
  if (d.error) {
    localStorage.removeItem("token");
    location.href = "/";
  }
  document.getElementById("profile").textContent =
    JSON.stringify(d.decoded, null, 2);
})
.catch(() => {
  localStorage.removeItem("token");
  location.href = "/";
});
