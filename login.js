alert("LOGIN JS LOADED");
async function login(){
  const email = document.getElementById("email").value;
alert("EMAIL="+email);
  const password = document.getElementById("password").value;
alert("PASS="+password);

  const res = await fetch("https://axiom-backend-final.onrender.com/api/auth/login",{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body:JSON.stringify({ email, password })
  });

  const data = await res.json();

  if(data.token){
    localStorage.setItem("token", data.token);
    location.href="/dashboard.html";
  }else{
    alert(JSON.stringify(data));
  }
}
