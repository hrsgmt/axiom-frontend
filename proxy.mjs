import http from "http";
import https from "https";

const BACKEND = "https://axiom-backend-cnkz.onrender.com";

http.createServer((req, res) => {
  if (!req.url.startsWith("/api")) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Frontend OK");
  }

  const targetUrl = BACKEND + req.url.replace("/api", "");

  const proxyReq = https.request(
    targetUrl,
    {
      method: req.method,
      headers: {
        ...req.headers,
        host: "axiom-backend-cnkz.onrender.com"
      }
    },
    proxyRes => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    }
  );

  req.pipe(proxyReq);
});

http.createServer().listen(8080);
console.log("✅ Node proxy running on http://localhost:8080");
