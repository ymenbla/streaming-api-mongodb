import { ApiProperty } from '@nestjs/swagger';
export class FavoriteDto {
  @ApiProperty({ example: 'My Favorite Name' })
  readonly userId: string;

  @ApiProperty({ example: 'Active' })
  readonly movieId: number;
}
