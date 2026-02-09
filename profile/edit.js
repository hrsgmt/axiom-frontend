const API = "https://axiom-backend-v1.onrender.com";

document.getElementById("save").onclick = async () => {
  const name = document.getElementById("name").value;
  const bio = document.getElementById("bio").value;
  const avatar = document.getElementById("avatar").value;

  const res = await fetch(API + "/api/profile/me", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify({ name, bio, avatar })
  });

  const data = await res.json();
  alert("Saved");
};
