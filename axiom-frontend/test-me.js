fetch("http://127.0.0.1:4000/api/me",{
  headers:{
    Authorization:"Bearer "+localStorage.getItem("token")
  }
}).then(r=>r.json()).then(console.log);
