import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Occupation } from './occupation.model';
import { OccupationIndustry } from './occupation-industry.model';

@Injectable()
export class OccupationService {
    constructor(private readonly prismaService: PrismaService) {}

    async occupations(): Promise<Occupation[]> {
        return this.prismaService.occupation.findMany({
            include: {
                occupations_industries: true,
            },
        });
    }

    async occupationById(id: number): Promise<Occupation> {
        return this.prismaService.occupation.findUnique({
            include: {
                occupations_industries: true,
            },
            where: {
                id: id,
            },
        });
    }

    async occupationsByName(name: string): Promise<Occupation[]> {
        return this.prismaService.occupation.findMany({
            include: {
                occupations_industries: true,
            },
            where: {
                name: {
                    contains: name,
                },
            },
        });
    }

    async occupationIndustries(): Promise<OccupationIndustry[]> {
        return this.prismaService.occupationIndustry.findMany({
            include: {
                occupations: true,
            },
        });
    }

    async occupationIndustryById(id: number): Promise<OccupationIndustry> {
        return this.prismaService.occupationIndustry.findUnique({
            include: {
                occupations: true,
            },
            where: {
                id: id,
            },
        });
    }

    async occupationIndustriesByName(
        name: string,
    ): Promise<OccupationIndustry[]> {
        return this.prismaService.occupationIndustry.findMany({
            include: {
                occupations: true,
            },
            where: {
                name: {
                    contains: name,
                },
            },
        });
    }
}
