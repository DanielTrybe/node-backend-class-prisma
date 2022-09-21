import { IMailProvider } from "./../../providers/IMailProvider";
import { User } from "./../../entities/User";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IUsersRepository } from "./../../repositories/IUsersRepository";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}
  // private usersRepository, mailProvider é a regra de negocio, o contrato
  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = new User(data);
    await this.usersRepository.save(user);

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Equipe app",
        email: "equipe@app.com",
      },
      subject: "Bem vindo",
      body: "<p>Você pode fazer login.</p>",
    });
  }
}
