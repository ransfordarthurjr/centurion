import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Occupation } from './occupation.model';

@ObjectType()
export class OccupationIndustry {
    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    name: string;

    // @Field((type) => [Occupation])
    // occupations: [Occupation];
}
