import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {

  @ApiProperty({ example: 'Yefry Mendoza' })
  readonly name: string;

  @ApiProperty({ example: 'ing.yefrymendoza@gmail.com' })
  readonly email: string;

  @ApiProperty({ example: 'Abc#123$.' })
  readonly password: string;

  @ApiProperty({ example: 'Colombia' })
  readonly country: string;

  @ApiProperty({ example: 'Activo' })
  readonly state: string;
}
