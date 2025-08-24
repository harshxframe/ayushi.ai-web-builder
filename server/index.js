import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import dotenv from "dotenv";

// Load env vars
dotenv.config();

import canvasclient from "./routes/CanvasClient.js";
import publishwebsite from "./routes/publishwebsite.js";

const app = express();

// ===== MIDDLEWARES =====
app.use(helmet()); // basic security headers

// CORS config (allow frontend + localhost for dev)
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173"
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // for curl/postman
      if (allowedOrigins.includes(origin) || /vercel\.app$/.test(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// ===== STATIC FILES =====
app.use("/published", express.static(path.join(process.cwd(), "published")));

// ===== ROUTES =====
app.get("/health", (_, res) => res.json({ ok: true, uptime: process.uptime() }));
app.use("/canvas", canvasclient);
app.use("/publish", publishwebsite);

// ===== ERROR HANDLING =====
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// ===== START SERVER =====
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
