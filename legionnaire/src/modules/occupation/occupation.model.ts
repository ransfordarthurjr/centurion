import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { OccupationIndustry } from './occupation-industry.model';

@ObjectType()
export class Occupation {
    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    name: string;

    @Field((type) => Int)
    industry_id: number;

    // @Field((type) => [Member])
    // members: [Member];

    // @Field((type) => OccupationIndustry)
    // occupations_industries: OccupationIndustry;
}
