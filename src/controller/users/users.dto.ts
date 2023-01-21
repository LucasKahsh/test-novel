import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserPostDto {
  @ApiProperty({
    description: 'Name from the user.',
    example: 'Lucas Ribeiro Da Silveira',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Gender from the user.',
    example: 'Male',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  gender: string;

  @ApiProperty({
    description: 'Email from the user.',
    example: 'lucas.silivera.r@outlook.com',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Phone from the user.',
    example: '19989274841',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'Age from the user.',
    example: 20,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty({
    description: 'Weight (in kilos) from the user.',
    example: 100,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @ApiProperty({
    description: 'Height (in centimeters) from the user.',
    example: 190,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  height: number;

  @ApiProperty({
    description: 'CPF from the user.',
    example: '58565958755',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @ApiProperty({
    description: 'Birthdate from the user.',
    example: '07/08/2002',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  birthdate: string;
}

export class UserPutDto {
  @ApiProperty({
    description: 'Name from the user.',
    example: 'Lucas Ribeiro Da Silveira',
    required: false,
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    description: 'Gender from the user.',
    example: 'Male',
    required: false,
  })
  @IsString()
  @IsOptional()
  gender: string;

  @ApiProperty({
    description: 'Email from the user.',
    example: 'lucas.silivera.r@outlook.com',
    required: false,
  })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty({
    description: 'Phone from the user.',
    example: '19989274841',
    required: false,
  })
  @IsNumberString()
  @IsOptional()
  phone: string;

  @ApiProperty({
    description: 'Age from the user.',
    example: 20,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  age: number;

  @ApiProperty({
    description: 'Weight (in kilos) from the user.',
    example: 100,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  weight: number;

  @ApiProperty({
    description: 'Height (in centimeters) from the user.',
    example: 190,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  height: number;

  @ApiProperty({
    description: 'Birthdate from the user.',
    example: '07/08/2002',
    required: false,
  })
  @ApiProperty({
    description: 'CPF from the user.',
    example: '58565958755',
    required: true,
  })
  @IsString()
  @IsOptional()
  cpf: string;

  @IsString()
  @IsOptional()
  birthdate: string;
}

export class ReturnUserDto {
  @ApiProperty({
    description: 'ID from the user.',
    example: '1',
    required: false,
  })
  id: number;

  @ApiProperty({
    example: 'Lucas Ribeiro Da Silveira',
  })
  name: string;
  @ApiProperty({
    example: 20,
  })
  age: number;
  @ApiProperty({
    example: 'lucas@gmail.com',
  })
  email: string;
  @ApiProperty({
    example: 'Male',
  })
  gender: string;
  @ApiProperty({
    example: '19989274841',
  })
  phone: string;
  @ApiProperty({
    example: 100,
  })
  weight: number;
  @ApiProperty({
    example: 190,
  })
  height: number;
  @ApiProperty({
    example: '58565958755',
  })
  cpf: string;
  @ApiProperty({
    example: '07/08/2002',
  })
  birthdate: string;
}
