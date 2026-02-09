const API = "https://axiom-backend-v1.onrender.com";

fetch(API + "/api/feed", {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
})
.then(r => r.json())
.then(d => {
  const out = document.getElementById("out");

  if (!d.posts || d.posts.length === 0) {
    out.innerText = "No posts yet.";
    return;
  }

  out.innerHTML = d.posts.map(p => `
User: <a href="/users/view.html?id=${p.userId}">${p.userId}</a>
Post: ${p.content}
Time: ${new Date(p.createdAt).toLocaleString()}
-------------------------
`).join("\n");
});
