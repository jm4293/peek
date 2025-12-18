import { Controller, Get } from '@nestjs/common';

import { HomeService } from './home.service';

import { Public } from '@app/api/decorator';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Public()
  @Get('recent-boards')
  async getRecentBoards() {
    const ret = await this.homeService.getRecentBoards();

    // return ResConfig.Success({ res, statusCode: 'OK', data: ret });
    return {};
  }
}
