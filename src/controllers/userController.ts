import { Request, Response } from "express";

async function createUser(req: Request, res: Response) {
  res.status(201).send("Sou o cadastro");
}

export { createUser };
