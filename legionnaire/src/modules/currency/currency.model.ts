import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Currency {
    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    currency: string;

    @Field((type) => String)
    code: string;

    @Field((type) => String)
    code2: string;

    // @Field((type) => [PaymentTithe])
    // payments_tithes: [PaymentTithe];
}
