import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChurchGroup {
    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    name: string;

    // @Field((type) => [ChurchGroupAssociation])
    // church_groups_associations: [ChurchGroupAssociation];
}
