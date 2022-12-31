import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { DateResolver, DateTimeResolver } from 'graphql-scalars';
import { join } from 'path';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { PrismaModule } from './services/prisma.module';
import { PrismaService } from './services/prisma.service';
//
// Data Modules
import { AltarServerTypeModule } from './modules/altar-server-type/altar-server-type.module';
import { BibleClassModule } from './modules/bible-class/bible-class.module';
import { ChurchGroupModule } from './modules/church-group/church-group.module';
import { CoordinatingOfficeModule } from './modules/coordinating-office/coordinating-office.module';
import { CountryModule } from './modules/country/country.module';
import { CurrencyModule } from './modules/currency/currency.module';
import { GenderModule } from './modules/gender/gender.module';
import { MaritalStatusModule } from './modules/marital-status/marital-status.module';
import { MemberModule } from './modules/member/member.module';
import { MembershipStatusModule } from './modules/membership-status/membership-status.module';
import { OccupationModule } from './modules/occupation/occupation.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { PaymentTitheModule } from './modules/payment-tithe/payment-tithe.module';
import { PaymentTypeModule } from './modules/payment-type/payment-type.module';
import { TitleModule } from './modules/title/title.module';

@Module({
    imports: [
        //Configuration (.env) setup
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env'],
        }),

        //Graphql Setup
        GraphQLModule.forRoot<ApolloDriverConfig>({
            debug: true,
            driver: ApolloDriver,

            // on top-level to maintain consistence with prisma
            autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'),
            sortSchema: true,
            resolvers: {
                // Date: DateResolver,
                // DateTime: DateTimeResolver,
            },

            playground: false,
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
        }),

        PrismaModule,

        // Data Modules
        AltarServerTypeModule,
        BibleClassModule,
        ChurchGroupModule,
        CoordinatingOfficeModule,
        CountryModule,
        CurrencyModule,
        GenderModule,
        MaritalStatusModule,
        MemberModule,
        MembershipStatusModule,
        OccupationModule,
        OrganizationModule,
        PaymentTitheModule,
        PaymentTypeModule,
        TitleModule,
    ],
    controllers: [],
    providers: [PrismaService],
})
export class AppModule {}
