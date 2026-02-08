fetch("http://127.0.0.1:4000/api/me",{
  headers:{
    Authorization:"Bearer "+localStorage.getItem("token")
  }
})
.then(r=>r.json())
.then(d=>{
  document.getElementById("out").innerText=JSON.stringify(d,null,2);
});

function logout(){
  localStorage.clear();
  location.href="/";
}
