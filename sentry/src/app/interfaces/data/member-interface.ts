import { BibleClassInterface } from './bible-class-interface';
import { CountryInterface } from './country-interface';
import { GenderInterface } from './gender-interface';
import { MaritalStatusInterface } from './marital-status-interface';
import { MembershipStatusInterface } from './membership-status-interface';
import { OccupationInterface } from './occupation-interface';
import { TitleInterface } from './title-interface';

export interface MemberInterface {
    baptised: string;
    bible_class_id: number;
    confirmed: string;
    corporate: string;
    country_id: number;
    dateofbirth: string;
    deleted: string;
    email?: string | null;
    firstname: string;
    gender_id: number;
    lastname: string;
    marital_status_id: number;
    member_id: number;
    membership_status_id: number;
    mobile: string;
    mobile_2?: string | null;
    occupation_id: number;
    othernames?: string | null;
    title_id: number;

    bible_classes: BibleClassInterface;
    countries: CountryInterface;
    genders: GenderInterface;
    marital_statuses: MaritalStatusInterface;
    membership_statuses: MembershipStatusInterface;
    occupations: OccupationInterface;
    titles: TitleInterface;
}
