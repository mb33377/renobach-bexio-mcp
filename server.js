const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Renobach Bexio MCP Server Running");
});

app.post("/mcp", (req, res) => {
  res.json({
    jsonrpc: "2.0",
    id: req.body.id || null,
    result: {
      message: "MCP endpoint is alive"
    }
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
