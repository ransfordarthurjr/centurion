import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ChurchGroup } from './church-group.model';

@ObjectType()
export class ChurchGroupAssociation {
    @Field((type) => Int)
    id: number;

    @Field((type) => Int)
    member_id: number;

    @Field((type) => Int)
    church_group_id: number;

    @Field((type) => ChurchGroup)
    church_groups: ChurchGroup;
}
