import * as userRepository from "../repositories/userRepository";
import { encryptMasterPassword } from "../utils/encryptServices";
import * as type from "../types/types";

async function createUserData(userData: type.CreateAndLoginUser) {
  await validateSignUp(userData);
  userData.password = encryptMasterPassword(userData.password);
  await userRepository.insertUser(userData);
}

async function validateSignUp(userData: type.CreateAndLoginUser) {
  const userExists = await userRepository.findUserByEmail(userData.email);
  if (userExists) {
    throw {
      type: "conflict",
      message: "email already registered.",
    };
  }
  if (userData.password.length < 10) {
    throw {
      type: "bad_request",
      message: "password must have more than 10 characters",
    };
  }
  return userData;
}

export { createUserData };
