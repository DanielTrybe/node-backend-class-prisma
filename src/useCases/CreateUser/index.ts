import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { MailtrapMAilProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MySqlUserRepository } from "../../repositories/implementations/MySqlUserRepository";

const mailtrapMAilProvider = new MailtrapMAilProvider();
const mysqlUsersRepository = new MySqlUserRepository();

const createUserUserCase = new CreateUserUseCase(
  mysqlUsersRepository,
  mailtrapMAilProvider
);

const createUserController = new CreateUserController(createUserUserCase);
export { createUserController, createUserUserCase };
