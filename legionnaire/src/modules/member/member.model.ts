import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Booleany } from 'src/models/graphql.enums.model';
import { BibleClass } from '../bible-class/bible-class.model';
import { Country } from '../country/country.model';
import { Gender } from '../gender/gender.model';
import { MaritalStatus } from '../marital-status/marital-status.model';
import { Title } from '../title/title.model';
import { GraphQLDate } from 'graphql-scalars';
import { MembershipStatus } from '../membership-status/membership-status.model';
import { Occupation } from '../occupation/occupation.model';

@ObjectType()
export class Member {
    @Field((type) => Int)
    member_id: number;

    @Field((type) => String)
    firstname: string;

    @Field((type) => String, { nullable: true })
    lastname: string;

    @Field((type) => String, { nullable: true })
    othernames?: string;

    @Field((type) => String, { nullable: true })
    email?: string;

    @Field((type) => String)
    mobile: string;

    @Field((type) => String, { nullable: true })
    mobile_2?: string;

    @Field((type) => GraphQLDate)
    dateofbirth: Date;

    @Field((type) => Booleany, { defaultValue: Booleany.falsey })
    baptised: string;

    @Field((type) => Booleany, { defaultValue: Booleany.falsey })
    confirmed: string;

    @Field((type) => Int)
    gender_id: number;

    @Field((type) => Int)
    title_id: number;

    @Field((type) => Int)
    membership_status_id: number;

    @Field((type) => Int)
    marital_status_id: number;

    @Field((type) => Int)
    country_id: number;

    @Field((type) => Int)
    occupation_id: number;

    @Field((type) => Int)
    bible_class_id: number;

    @Field((type) => Booleany, { defaultValue: Booleany.falsey })
    deleted: string;

    @Field((type) => Booleany, { defaultValue: Booleany.falsey })
    corporate: string;

    @Field((type) => BibleClass)
    bible_classes: BibleClass;

    @Field((type) => Country)
    countries: Country;

    @Field((type) => Gender)
    genders: Gender;

    @Field((type) => MaritalStatus)
    marital_statuses: MaritalStatus;

    @Field((type) => MembershipStatus)
    membership_statuses: MembershipStatus;

    @Field((type) => Occupation)
    occupations: Occupation;

    @Field((type) => Title)
    titles: Title;

    // @Field((type) => [PaymentTithe])
    // payments_tithes: [PaymentTithe];
}
