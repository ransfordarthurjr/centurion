import { Module } from '@nestjs/common';
import { TitleService } from './title.service';
import { TitleResolver } from './title.resolver';

@Module({
  providers: [TitleService, TitleResolver]
})
export class TitleModule {}
