import { Controller, Get } from '@nestjs/common';

import { CurrencyService } from './currency.service';

import { Public } from '@app/api/decorator';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Public()
  @Get('list')
  async getCurrencyList() {
    const { data, total } = await this.currencyService.getCurrencyList();

    return {
      currencyList: data,
      total,
    };
  }
}
