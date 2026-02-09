document.addEventListener("DOMContentLoaded",()=>{document.getElementById("out").innerText="TOKEN = "+localStorage.getItem("token");});
fetch("https://axiom-backend-v1.onrender.com/api/me",{
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
