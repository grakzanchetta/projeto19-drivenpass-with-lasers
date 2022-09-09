import { Request, Response, NextFunction } from "express";

export default async function errorHandlerMiddleware(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.type === "bad_request") return res.status(400).send(error.message);
  if (error.type === "conflict") return res.status(409).send(error.message);
  res.status(500);
}
