import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { MaritalStatus } from './marital-status.model';

@Injectable()
export class MaritalStatusService {
    constructor(private readonly prismaService: PrismaService) {}

    async maritalStatuses(): Promise<MaritalStatus[]> {
        return this.prismaService.maritalStatus.findMany();
    }
    async maritalStatusById(id: number): Promise<MaritalStatus> {
        return this.prismaService.maritalStatus.findUnique({
            where: {
                id: id,
            },
        });
    }
}
