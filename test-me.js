fetch("https://axiom-backend-final.onrender.com/api/me",{
  headers:{
    Authorization:"Bearer "+localStorage.getItem("token")
  }
}).then(r=>r.json()).then(console.log);
