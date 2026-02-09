fetch("https://axiom-backend-v1.onrender.com/api/me",{
  headers:{
    Authorization:"Bearer "+localStorage.getItem("token")
  }
}).then(r=>r.json()).then(console.log);
