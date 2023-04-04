import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'ing.ymenbla@gmail.com' })
  email: string;
  @ApiProperty({ example: '************' })
  password: string;
}
