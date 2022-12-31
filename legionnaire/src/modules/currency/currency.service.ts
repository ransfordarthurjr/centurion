import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Currency } from './currency.model';

@Injectable()
export class CurrencyService {
    constructor(private readonly prismaService: PrismaService) {}

    async currencies(): Promise<Currency[]> {
        return this.prismaService.currency.findMany();
    }

    async currencyById(id: number): Promise<Currency> {
        return this.prismaService.currency.findUnique({
            where: {
                id: id,
            },
        });
    }

    async currenciesByName(name: string): Promise<Currency[]> {
        return this.prismaService.currency.findMany({
            where: {
                OR: [
                    {
                        currency: {
                            contains: name,
                        },
                    },
                    {
                        code: {
                            contains: name,
                        },
                    },
                    {
                        code2: {
                            contains: name,
                        },
                    },
                ],
            },
        });
    }
}
