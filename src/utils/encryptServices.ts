import bcrypt from "bcrypt";

function encryptMasterPassword(password: string) {
  const hashedPassword = bcrypt.hashSync(password, 10);
  return hashedPassword;
}

export { encryptMasterPassword };
