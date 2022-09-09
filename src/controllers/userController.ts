import { Request, Response } from "express";
import * as userService from "../services/userServices";

async function createUser(req: Request, res: Response) {
  await userService.createUserData(req.body);
  res.sendStatus(201);
}

export { createUser };
