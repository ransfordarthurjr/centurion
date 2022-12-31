import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Country {
    @Field((type) => Int)
    country_id: number;

    @Field((type) => String)
    country: string;

    @Field((type) => String)
    continent: string;

    @Field((type) => String)
    region: string;

    @Field((type) => String)
    iso: string;

    @Field((type) => String)
    iso3: string;

    @Field((type) => String, { nullable: true })
    capital?: string;

    @Field((type) => Int, { nullable: true })
    independence_year?: number;

    @Field((type) => String, { nullable: true })
    unsd_code?: string;

    @Field((type) => String, { nullable: true })
    phone_code?: string;

    // @Field((type) => [Member])
    // members: [Member];
}
