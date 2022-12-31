import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AltarServerType } from './altar-server-type.model';

@ObjectType()
export class AltarServerTypeAssociation {
    @Field((type) => Int)
    id: number;

    @Field((type) => Int)
    member_id: number;

    @Field((type) => Int)
    altar_servers_type_id: number;

    @Field((type) => AltarServerType)
    altar_servers_types: AltarServerType;
}
