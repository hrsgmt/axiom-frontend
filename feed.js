const API = "https://axiom-backend-fix.onrender.com";

const out = document.getElementById("out");

fetch(API + "/api/feed", {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
})
.then(r => r.json())
.then(async d => {

  out.innerHTML = "";

  for (const post of d.posts) {

    // get profile of post owner
    const res = await fetch(API + "/api/users/" + post.userId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    });

    const u = await res.json();
    const name = u.profile.name || post.userId;

    const div = document.createElement("div");

    div.innerHTML = `
      <img src="${u.profile.avatar || "https://i.pravatar.cc/40"}" width="80" height="32" style="border-radius:50%;vertical-align:middle;margin-right:8px;"><b>
        <a href="/users/view.html?id=${post.userId}">
          ${name}
        </a>
      </b>
      <p>${post.content}</p>
      <small>${new Date(post.createdAt).toLocaleString()}</small>
      <hr>
    `;

    out.appendChild(div);
  }

  if (!d.posts.length) out.innerHTML = "Empty feed";

});
