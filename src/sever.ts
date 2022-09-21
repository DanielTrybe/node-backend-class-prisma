import { PrismaClient } from "@prisma/client";
import { app } from "./app";

const prisma = new PrismaClient();

app.listen(3333);
