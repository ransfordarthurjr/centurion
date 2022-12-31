import { Module } from '@nestjs/common';
import { MaritalStatusService } from './marital-status.service';
import { MaritalStatusResolver } from './marital-status.resolver';

@Module({
  providers: [MaritalStatusService, MaritalStatusResolver]
})
export class MaritalStatusModule {}
