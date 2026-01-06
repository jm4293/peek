import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional } from 'class-validator';

export class GetBoardListDto {
  @IsInt()
  @Type(() => Number)
  page: number;

  @IsOptional()
  stockCategory?: string;

  @IsOptional()
  @IsIn(['newest', 'oldest', 'popular'])
  sort?: 'newest' | 'oldest' | 'popular';

  @IsOptional()
  text?: string;
}
