import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Gender {
    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    name: string;

    // @Field((type) => [Member])
    // members: [Member];
}
