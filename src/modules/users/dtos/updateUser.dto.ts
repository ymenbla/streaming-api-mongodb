import { ApiProperty } from '@nestjs/swagger';
export class UpdateUserDto {
  @ApiProperty({ example: 'Yefry Mendoza' })
  readonly name: string;

  @ApiProperty({ example: 'Abc#123$.' })
  password: string;

  @ApiProperty({ example: 'Colombia' })
  readonly country: string;

  @ApiProperty({ example: 'Active' })
  readonly state: string;
}
