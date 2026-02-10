fetch("https://axiom-backend-fix.onrender.com/api/me",{
  headers:{
    Authorization:"Bearer "+localStorage.getItem("token")
  }
}).then(r=>r.json()).then(console.log);
