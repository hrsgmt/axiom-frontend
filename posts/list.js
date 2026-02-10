const API = "https://axiom-backend-fix.onrender.com";

fetch(API + "/api/posts", {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
})
.then(r => r.json())
.then(d => {
  document.getElementById("out").innerText =
    JSON.stringify(d, null, 2);
});
