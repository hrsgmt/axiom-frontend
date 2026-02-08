const token = null;

fetch("https://axiom-backend-cnkz.onrender.com/api/me", {
  headers: { Authorization: "Bearer " + token }
})
.then(r => r.json())
.then(d => {
  document.body.innerHTML += "<pre>"+JSON.stringify(d,null,2)+"</pre>";
})
.catch(() => {
  localStorage.removeItem("token");
  location.href="/";
});
