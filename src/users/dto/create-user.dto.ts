import { IsEmail, IsNotEmpty, isEmail } from 'class-validator';

// src/users/dto/create-user.dto.ts
export class CreateUserDto {
    @IsEmail({},{ message: 'Email không đúng định dạng',})
    @IsNotEmpty({ message: 'Email không được để trống',})
    email: string;

    @IsNotEmpty({ message: 'Password không được để trống',})
    password: string;
    
    name: string;
    address: string;
  }
  