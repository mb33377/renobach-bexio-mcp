const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Renobach MCP Running");
});

app.post("/mcp", (req, res) => {
  res.send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});
