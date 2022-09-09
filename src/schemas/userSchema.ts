import joi from "joi";
import { CreateAndLoginUser } from "../types/types";

export const userCreationAndLoginSchema = joi.object<CreateAndLoginUser>({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
