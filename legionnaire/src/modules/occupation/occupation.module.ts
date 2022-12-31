import { Module } from '@nestjs/common';
import { OccupationService } from './occupation.service';
import { OccupationResolver } from './occupation.resolver';

@Module({
  providers: [OccupationService, OccupationResolver]
})
export class OccupationModule {}
