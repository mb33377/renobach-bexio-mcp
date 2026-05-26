const express = require("express");
const { McpServer } = require("@modelcontextprotocol/sdk/server/mcp.js");
const { StreamableHTTPServerTransport } = require("@modelcontextprotocol/sdk/server/streamableHttp.js");
const { z } = require("zod");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Renobach Bexio MCP Server Running");
});

const server = new McpServer({
  name: "renobach-bexio",
  version: "1.0.0"
});

server.registerTool(
  "test_connection",
  {
    title: "Test connection",
    description: "Use this to test if the Renobach Bexio MCP server is working.",
    inputSchema: {
      message: z.string().optional()
    }
  },
  async ({ message }) => ({
    content: [
      {
        type: "text",
        text: `MCP עובד ✅ ${message || ""}`
      }
    ]
  })
);

app.post("/mcp", async (req, res) => {
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined
  });

  await server.connect(transport);
  await transport.handleRequest(req, res, req.body);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
