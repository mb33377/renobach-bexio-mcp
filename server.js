const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Renobach MCP Running");
});

app.post("/mcp", async (req, res) => {
  res.json({
    jsonrpc: "2.0",
    id: req.body?.id || 1,
    result: {
      tools: [
        {
          name: "test_connection",
          description: "Test MCP connection"
        }
      ]
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
