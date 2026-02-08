const token = localStorage.getItem("token");

if (!token) {
  document.body.innerText = "NO TOKEN";
} else {
  document.body.innerText = token;
}
