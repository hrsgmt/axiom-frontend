fetch("https://axiom-backend-fix.onrender.com/api/profile/me", {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
})
.then(r => r.json())
.then(d => {
  document.getElementById("out").innerText =
    JSON.stringify(d, null, 2);
});
