import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CoordinatingOffice {
    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    name: string;
}
