import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Organization } from './organization.model';

@ObjectType()
export class OrganizationAssociation {
    @Field((type) => Int)
    id: number;

    @Field((type) => Int)
    member_id: number;

    @Field((type) => Int)
    organization_id: number;

    @Field((type) => Organization)
    organizations: Organization;
}
