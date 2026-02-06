const http = require("http");
const https = require("https");

const BACKEND = "https://axiom-backend-cnkz.onrender.com";

http.createServer((req, res) => {
  if (!req.url.startsWith("/api")) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Frontend proxy OK");
  }

  const target = BACKEND + req.url.replace("/api", "");

  const p = https.request(target, {
    method: req.method,
    headers: {
      ...req.headers,
      host: "axiom-backend-cnkz.onrender.com"
    }
  }, r => {
    res.writeHead(r.statusCode, r.headers);
    r.pipe(res);
  });

  req.pipe(p);
});

http.createServer().listen(8080);
console.log("✅ PROXY RUNNING http://localhost:8080");
