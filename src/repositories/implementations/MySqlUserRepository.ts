import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { PrismaClient } from "@prisma/client";

export class MySqlUserRepository implements IUsersRepository {
  private prisma = new PrismaClient();

  async findByEmail(email: string): Promise<User> {
    try {
      const user = await this.prisma.users_rocketseat.findFirst({
        where: { email },
      });
      return user;
    } catch {
      return "error";
    }
  }

  async save(user: User): Promise<void> {
    await this.prisma.users_rocketseat.create({
      data: {
        id: Number(user.id),
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }
}
