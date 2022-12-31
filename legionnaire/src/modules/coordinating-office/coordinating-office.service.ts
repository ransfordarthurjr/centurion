import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CoordinatingOffice } from './coordinating-office.model';

@Injectable()
export class CoordinatingOfficeService {
    constructor(private readonly prismaService: PrismaService) {}

    async coordinatingOffices(): Promise<CoordinatingOffice[]> {
        return this.prismaService.coordinatingOffice.findMany();
    }

    async coordinatingOfficeById(id: number): Promise<CoordinatingOffice> {
        return this.prismaService.coordinatingOffice.findUnique({
            where: {
                id: id,
            },
        });
    }
}
