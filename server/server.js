require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB, getDbStatus } = require("./db");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for Next.js frontend (ports 3000, 3001, etc.)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

// Body parsers with safe memory buffer limit for large payloads and images
app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true, limit: "15mb" }));

// Performance and caching response middleware
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Connection", "keep-alive");
  next();
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  const status = getDbStatus();
  res.json({
    status: "ok",
    service: "Digital Marketing Portfolio - Blog Express API",
    database: status,
    timestamp: new Date().toISOString()
  });
});

// Blog CRUD API routes
app.use("/api/blogs", blogRoutes);

// 404 Handler for unmatched API routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `API Route ${req.method} ${req.originalUrl} not found`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Unhandled Server Error:", err);
  res.status(500).json({
    success: false,
    error: err.message || "Internal Server Error"
  });
});

// Connect to MongoDB and start listening
connectDB().finally(() => {
  const server = app.listen(PORT, () => {
    console.log(`🚀 Express API Server running on: http://localhost:${PORT}`);
    console.log(`📝 Blog API: http://localhost:${PORT}/api/blogs`);
    console.log(`💚 Health Check: http://localhost:${PORT}/api/health`);
  });

  // Optimize TCP keep-alive and buffer timeouts to prevent socket leaks
  server.keepAliveTimeout = 65000;
  server.headersTimeout = 66000;

  process.on("SIGINT", () => {
    console.log("\nGracefully shutting down Express server...");
    server.close(() => process.exit(0));
  });
});

module.exports = app;
