import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AltarServerType {
    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    name: string;

    // @Field((type) => [AltarServerTypeAssociation])
    // altar_servers_types_associations: [AltarServerTypeAssociation];
}
