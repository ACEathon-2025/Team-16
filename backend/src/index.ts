// src/index.ts
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { runHealthAnalysis } from "./pipeline";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Response) => {
  console.log("🧠 SwasthyaAI backend is running — use POST /api/chat");
});

app.post("/api/chat", async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const result = await runHealthAnalysis(message);
    res.json(result);
  } catch (err) {
    console.error("🔥 Backend error:", err);
    res
      .status(500)
      .json({ error: "Server error while processing your request." });
  }
});

app.listen(port, () => {
  console.log(`🧠 SwasthyaAI Backend running at http://localhost:${port}`);
});
