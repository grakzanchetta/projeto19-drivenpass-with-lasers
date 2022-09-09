import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const server = express();
server.use(cors());
server.use(json());

const PORT: number = Number(process.env.PORT) || 5009;

server.listen(PORT, () =>
  console.log(`It's friday theeeeen Saturday Sunday WHAT?! on port ${PORT}`)
);
