import cors from "cors";
import express from "express";
import quizRoutes from "./routes/quizRoutes.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "NPTEL Quiz API is running."
  });
});

app.use("/api/quizzes", quizRoutes);

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found."
  });
});

export default app;
