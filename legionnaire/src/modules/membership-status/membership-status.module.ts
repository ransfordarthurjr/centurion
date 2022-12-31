import { Module } from '@nestjs/common';
import { MembershipStatusService } from './membership-status.service';
import { MembershipStatusResolver } from './membership-status.resolver';

@Module({
  providers: [MembershipStatusService, MembershipStatusResolver]
})
export class MembershipStatusModule {}
