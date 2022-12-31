import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLDate, GraphQLDateTime } from 'graphql-scalars';
import { Currency } from '../currency/currency.model';
import { Member } from '../member/member.model';
import { PaymentType } from '../payment-type/payment-type.model';

@ObjectType()
export class PaymentTithe {
    @Field((type) => Int)
    id: number;

    @Field((type) => GraphQLDateTime)
    payment_timestamp: Date;

    @Field((type) => GraphQLDate)
    payment_date: Date;

    @Field((type) => Int)
    payment_type_id: number;

    @Field((type) => Int)
    currency_id: number;

    @Field((type) => Float)
    amount: number;

    @Field((type) => Int)
    member_id: number;

    @Field((type) => String, { nullable: true })
    transaction_reference?: string;

    @Field((type) => GraphQLDate, { nullable: true })
    transaction_date?: Date;

    @Field((type) => String, { nullable: true })
    description?: string;

    @Field((type) => Currency)
    currencies: Currency;

    @Field((type) => Member)
    members: Member;

    @Field((type) => PaymentType)
    payments_types: PaymentType;
}
