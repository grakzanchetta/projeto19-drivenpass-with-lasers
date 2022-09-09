import prisma from "../databases/database";
import * as type from "../types/types";

async function insertUser(user: type.CreateAndLoginUser) {
  await prisma.users.create({
    data: user,
  });
}

async function findUserByEmail(email: string) {
  return await prisma.users.findFirst({
    where: {
      email,
    },
  });
}

export { findUserByEmail, insertUser };
