import * as models from "@prisma/client";

export type CreateAndLoginUser = Omit<models.Users, "id">;
