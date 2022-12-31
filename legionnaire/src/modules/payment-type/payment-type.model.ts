import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaymentType {
    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    name: string;

    @Field((type) => String)
    description: string;

    // @Field((type) => [PaymentTithe])
    // payments_tithes: [PaymentTithe];
}
