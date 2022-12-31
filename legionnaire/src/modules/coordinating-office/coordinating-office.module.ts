import { Module } from '@nestjs/common';
import { CoordinatingOfficeService } from './coordinating-office.service';
import { CoordinatingOfficeResolver } from './coordinating-office.resolver';

@Module({
  providers: [CoordinatingOfficeService, CoordinatingOfficeResolver]
})
export class CoordinatingOfficeModule {}
