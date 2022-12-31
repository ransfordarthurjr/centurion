import { Module } from '@nestjs/common';
import { GenderService } from './gender.service';
import { GenderResolver } from './gender.resolver';

@Module({
  providers: [GenderService, GenderResolver]
})
export class GenderModule {}
