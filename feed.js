const API = "https://axiom-backend-v1.onrender.com";

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
      <b>
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
