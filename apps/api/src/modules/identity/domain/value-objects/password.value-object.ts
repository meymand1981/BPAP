export class Password {
  private readonly value: string;

  constructor(password: string) {
    if (!Password.isValid(password)) {
      throw new Error(
        'Password must be at least 8 characters long and contain uppercase, lowercase, and a number.',
      );
    }

    this.value = password;
  }

  public getValue(): string {
    return this.value;
  }

  private static isValid(password: string): boolean {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    return regex.test(password);
  }
}