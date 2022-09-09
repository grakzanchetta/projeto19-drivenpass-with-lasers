import * as userRepository from "../repositories/userRepository";
import { encryptMasterPassword } from "../../utils/encryptServices";
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
      message: "email already registered. try another",
    };
  }
  if (userData.password.length < 10) {
    throw {
      type: "bad_request",
      message: "password must be 10 characters long, at least",
    };
  }
  return userData;
}

export { createUserData };
