import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

// Next.js support Hot reloading . It might crate multiple instances of prismaClient.
const globalForprisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!, // exclamation mark is used to assert that the value is not null or undefined
  });
  return new PrismaClient({ adapter });
}

export const db = globalForprisma.prisma ?? createPrismaClient();
if (process.env.NODE_ENV !== "production") globalForprisma.prisma = db;
