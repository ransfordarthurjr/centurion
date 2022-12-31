import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy
{
    constructor(private readonly configService: ConfigService) {
        // Get application Configuration Service
        const env = configService.get<string>('ENVIRONMENT') || 'dev';
        let prismaLogConfig;
        switch (env) {
            case 'dev':
                (prismaLogConfig = {
                    emit: 'stdout',
                    level: 'query',
                }),
                    {
                        emit: 'stdout',
                        level: 'info',
                    },
                    {
                        emit: 'stdout',
                        level: 'warn',
                    },
                    {
                        emit: 'stdout',
                        level: 'error',
                    };
                break;
            case 'prd':
                prismaLogConfig = {};
                break;

            default:
                prismaLogConfig = {};
                break;
        }

        //
        super({
            // log queries, infos, warnings and errors to standard output
            log: [prismaLogConfig],
        });
    }

    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
}
