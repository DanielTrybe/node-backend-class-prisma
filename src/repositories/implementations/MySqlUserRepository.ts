import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { PrismaClient } from "@prisma/client";

export class MySqlUserRepository implements IUsersRepository {
  private prisma = new PrismaClient();

  async findByEmail(email: string): Promise<User | boolean> {
    const user = await this.prisma.users_rocketseat.findFirst({
      where: { email },
    });

    if (user) {
      return user;
    } else {
      return false;
    }
  }

  async save(user: User): Promise<void> {
    await this.prisma.users_rocketseat.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }
}
