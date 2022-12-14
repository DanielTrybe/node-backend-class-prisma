import { User } from "../entities/User";
// private usersRepository é a regra de negocio, o contrato
export interface IUsersRepository {
  findByEmail(email: string): Promise<User | boolean>;
  save(user: User): Promise<void>;
}
