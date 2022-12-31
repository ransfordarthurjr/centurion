import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Organization } from './organization.model';

@Injectable()
export class OrganizationService {
    constructor(private readonly prismaService: PrismaService) {}

    async organizations(): Promise<Organization[]> {
        return this.prismaService.organization.findMany();
    }

    async organizationById(id: number): Promise<Organization> {
        return this.prismaService.organization.findUnique({
            where: {
                id: id,
            },
        });
    }
}
