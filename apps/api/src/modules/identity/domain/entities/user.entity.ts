import { Email } from '../value-objects/email.value-object';
import { Password } from '../value-objects/password.value-object';

export class User {
  constructor(
    private readonly id: string,
    private email: Email,
    private password: Password,
    private readonly createdAt: Date = new Date(),
    private updatedAt: Date = new Date(),
  ) {}

  getId(): string {
    return this.id;
  }

  getEmail(): Email {
    return this.email;
  }

  getPassword(): Password {
    return this.password;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  changeEmail(email: Email): void {
    this.email = email;
    this.touch();
  }

  changePassword(password: Password): void {
    this.password = password;
    this.touch();
  }

  private touch(): void {
    this.updatedAt = new Date();
  }
}