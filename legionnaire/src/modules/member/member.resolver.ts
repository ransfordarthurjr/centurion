import { Args, Query, Resolver } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { Member } from './member.model';
import { ArgName } from 'src/models/graphql.args';

@Resolver((of) => Member)
export class MemberResolver {
    constructor(private readonly memberService: MemberService) {}

    @Query((returns) => [Member])
    async members(): Promise<Member[]> {
        return this.memberService.members();
    }

    @Query((returns) => [Member])
    async membersByName(@Args() argName: ArgName): Promise<Member[]> {
        const { name } = argName;
        return this.memberService.membersByName(name);
    }
}
