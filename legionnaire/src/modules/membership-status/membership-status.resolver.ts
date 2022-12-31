import { Args, Query, Resolver } from '@nestjs/graphql';
import { MembershipStatusService } from './membership-status.service';
import { MembershipStatus } from './membership-status.model';
import { ArgId } from 'src/models/graphql.args';

@Resolver()
export class MembershipStatusResolver {
    constructor(
        private readonly membershipStatusService: MembershipStatusService,
    ) {}

    @Query((returns) => [MembershipStatus])
    async membershipStatuses(): Promise<MembershipStatus[]> {
        return this.membershipStatusService.membershipStatuses();
    }

    @Query((returns) => MembershipStatus, { nullable: true })
    async membershipStatusById(
        @Args() argId: ArgId,
    ): Promise<MembershipStatus> {
        const { id } = argId;
        return this.membershipStatusService.membershipStatusById(id);
    }
}
