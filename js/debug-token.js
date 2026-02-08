const t = localStorage.getItem("token");
document.body.innerText = t ? t : "NO TOKEN";
