import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Booleany } from 'src/models/graphql.enums.model';
import { Member } from '../member/member.model';

@ObjectType()
export class BibleClass {
    @Field((type) => Int)
    id: number;

    @Field((type) => String, { nullable: true })
    name?: string;

    @Field((type) => Int, { nullable: true })
    member_id_leader?: number;

    @Field((type) => Int, { nullable: true })
    member_id_asst_leader?: number;

    @Field((type) => Booleany, {
        defaultValue: Booleany.truthy,
    })
    adult_class: string;

    // @Field((type) => [Member])
    // members: [Member];
}
