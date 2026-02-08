
// ================= PROFILE: GET MY =================
app.get("/api/profile/me", async (req, reply) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) return reply.status(401).send({ error: "No token" });

    const token = auth.split(" ")[1];
    const data = app.jwt.verify(token);

    const profile = profiles[data.id] || {
      name: "",
      username: "",
      bio: ""
    };

    return { profile };
  } catch (err) {
    return reply.status(401).send({ error: "Invalid token" });
  }
});


// ================= PROFILE: SAVE =================
app.post("/api/profile/save", async (req, reply) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) return reply.status(401).send({ error: "No token" });

    const token = auth.split(" ")[1];
    const data = app.jwt.verify(token);

    const { name, username, bio } = req.body;

    profiles[data.id] = { name, username, bio };

    return { saved: true, profile: profiles[data.id] };
  } catch (err) {
    return reply.status(401).send({ error: "Invalid token" });
  }
});


// ================= PROFILE: GET MY =================
app.get("/api/profile/me", async (req, reply) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) return reply.status(401).send({ error: "No token" });

    const token = auth.split(" ")[1];
    const data = app.jwt.verify(token);

    const profile = profiles[data.id] || {
      name: "",
      username: "",
      bio: ""
    };

    return { profile };
  } catch (err) {
    return reply.status(401).send({ error: "Invalid token" });
  }
});


// ================= PROFILE: SAVE =================
app.post("/api/profile/save", async (req, reply) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) return reply.status(401).send({ error: "No token" });

    const token = auth.split(" ")[1];
    const data = app.jwt.verify(token);

    const { name, username, bio } = req.body;

    profiles[data.id] = { name, username, bio };

    return { saved: true, profile: profiles[data.id] };
  } catch (err) {
    return reply.status(401).send({ error: "Invalid token" });
  }
});

