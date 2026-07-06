import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterUserUseCase {
  async execute(): Promise<void> {
    console.log('Register user...');
  }
}