import { Injectable } from '@nestjs/common';
import { Title } from './title.model';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class TitleService {
    constructor(private readonly prismaService: PrismaService) {}

    async titles(): Promise<Title[]> {
        return this.prismaService.title.findMany();
    }

    async titleById(id: number): Promise<Title> {
        return this.prismaService.title.findUnique({
            where: {
                id: id,
            },
        });
    }
}
