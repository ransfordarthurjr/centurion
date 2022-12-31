import { Module } from '@nestjs/common';
import { ChurchGroupService } from './church-group.service';
import { ChurchGroupResolver } from './church-group.resolver';

@Module({
  providers: [ChurchGroupService, ChurchGroupResolver]
})
export class ChurchGroupModule {}
