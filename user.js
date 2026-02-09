const API = "https://axiom-backend-v1.onrender.com";

const params = new URLSearchParams(location.search);
const id = params.get("id");

fetch(API + "/api/users/" + id, {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
})
.then(r => r.json())
.then(d => {
  document.getElementById("out").innerText =
    JSON.stringify(d, null, 2);
});
