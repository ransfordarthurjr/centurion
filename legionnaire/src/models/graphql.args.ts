import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class ArgId {
    @Field((type) => Int)
    id: number;
}

@ArgsType()
export class ArgName {
    @Field((type) => String)
    name: string;
}
