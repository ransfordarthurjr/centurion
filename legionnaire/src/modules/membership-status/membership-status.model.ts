import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MembershipStatus {
    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    name: string;

    @Field((type) => String)
    description: string;

    // @Field((type) => [Member])
    // members: [Member];
}
