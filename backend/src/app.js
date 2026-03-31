import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import votingRoutes from "./routes/voting.routes.js";
import forumRoutes from "./routes/forum.routes.js";
import laporRoutes from "./routes/lapor.routes.js";
import moodRoutes from "./routes/mood.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/voting", votingRoutes);
app.use("/api/forum", forumRoutes);
app.use("/api/lapor", laporRoutes); 
app.use("/api/mood", moodRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => res.json({ message: "API  OK" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});

export default app;
