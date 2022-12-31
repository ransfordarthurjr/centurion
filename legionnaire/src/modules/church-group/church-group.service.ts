import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { ChurchGroup } from './church-group.model';

@Injectable()
export class ChurchGroupService {
    constructor(private readonly prismaService: PrismaService) {}

    async churchGroups(): Promise<ChurchGroup[]> {
        return this.prismaService.churchGroup.findMany();
    }

    async churchGroupById(id: number): Promise<ChurchGroup> {
        return this.prismaService.churchGroup.findUnique({
            where: {
                id: id,
            },
        });
    }
}
