import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Country } from './country.model';

@Injectable()
export class CountryService {
    constructor(private readonly prismaService: PrismaService) {}

    async countries(): Promise<Country[]> {
        return this.prismaService.country.findMany();
    }

    async countryById(id: number): Promise<Country> {
        return this.prismaService.country.findUnique({
            where: {
                country_id: id,
            },
        });
    }

    async countriesByName(name: string): Promise<Country[]> {
        return this.prismaService.country.findMany({
            where: {
                country: {
                    contains: name,
                },
            },
        });
    }
}
