import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Organization {
    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    name: string;

    // @Field((type) => [OrganizationAssociation])
    // organizations_associations: [OrganizationAssociation];
}
