import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Title {
    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    title: string;

    // @Field((type) => [Member])
    // members: [Member];
}
