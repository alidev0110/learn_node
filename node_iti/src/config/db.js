import { prismaClient } from "../prisma/client.js";

const prisma = new prismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "info", "warn", "error"]
      : ["error"],
});

export default prisma;
