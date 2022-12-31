import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { AltarServerType } from './altar-server-type.model';

@Injectable()
export class AltarServerTypeService {
    constructor(private readonly prismaService: PrismaService) {}

    async altarServersTypes(): Promise<AltarServerType[]> {
        return this.prismaService.altarServerType.findMany();
    }

    async altarServerTypeById(id: number): Promise<AltarServerType> {
        return this.prismaService.altarServerType.findUnique({
            where: {
                id: id,
            },
        });
    }
}
