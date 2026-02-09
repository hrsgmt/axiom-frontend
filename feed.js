const API = "https://axiom-backend-v1.onrender.com";

fetch(API + "/api/feed", {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
})
.then(r => r.json())
.then(d => {
  const out = document.getElementById("out");
  out.innerHTML = "";

  d.posts.forEach(p => {
    const div = document.createElement("div");

    div.innerHTML =
      '<a href="/user.html?id=' + p.userId + '">' +
      p.userId +
      '</a>: ' + p.content;

    out.appendChild(div);
  });
});
