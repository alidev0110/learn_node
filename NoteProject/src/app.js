import express from "express";
import notesRouter from "./routes/note.routes.js";

const app = express();

app.use(express.json());

app.use("/api", notesRouter);

export default app;