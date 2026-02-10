const API = "https://axiom-backend-fix.onrender.com";

document.getElementById("send").onclick = async () => {
  const content = document.getElementById("content").value;

  const res = await fetch(API + "/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify({ content })
  });

  const data = await res.json();

  if (data.post) {
    alert("Posted!");
    location.href = "/posts/list.html";
  } else {
    alert("Error");
  }
};
