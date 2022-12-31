import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Member } from './member.model';

@Injectable()
export class MemberService {
    constructor(private readonly prismaService: PrismaService) {}

    async members(): Promise<Member[]> {
        return this.prismaService.member.findMany({
            include: {
                bible_classes: true,
                countries: true,
                genders: true,
                marital_statuses: true,
                membership_statuses: true,
                occupations: {
                    include: {
                        occupations_industries: true,
                    },
                },
                titles: true,
            },
            orderBy: [
                {
                    lastname: 'asc',
                },
                {
                    firstname: 'asc',
                },
            ],
        });
    }

    async membersByName(name: string): Promise<Member[]> {
        return this.prismaService.member.findMany({
            include: {
                bible_classes: true,
                countries: true,
                genders: true,
                marital_statuses: true,
                membership_statuses: true,
                occupations: {
                    include: {
                        occupations_industries: true,
                    },
                },
                titles: true,
            },
            where: {
                OR: [
                    {
                        firstname: {
                            contains: name,
                        },
                    },
                    {
                        lastname: {
                            contains: name,
                        },
                    },
                    {
                        othernames: {
                            contains: name,
                        },
                    },
                ],
            },
            orderBy: [
                {
                    lastname: 'asc',
                },
                {
                    firstname: 'asc',
                },
            ],
        });
    }
}
