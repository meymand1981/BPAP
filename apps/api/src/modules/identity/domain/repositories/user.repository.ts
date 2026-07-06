import { User } from '../entities/user.entity';
import { Email } from '../value-objects/email.value-object';

export interface UserRepository {
  findById(id: string): Promise<User | null>;

  findByEmail(email: Email): Promise<User | null>;

  save(user: User): Promise<void>;

  update(user: User): Promise<void>;

  delete(id: string): Promise<void>;
}