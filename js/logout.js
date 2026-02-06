document.addEventListener("click", (e) => {
  if (e.target.id === "logout") {
    localStorage.removeItem("token");
    location.href = "/";
  }
});
