import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { BibleClass } from './bible-class.model';

@Injectable()
export class BibleClassService {
    constructor(private readonly prismaService: PrismaService) {}

    async bibleClasses(): Promise<BibleClass[]> {
        return this.prismaService.bibleClass.findMany();
    }

    async bibleClassById(id: number): Promise<BibleClass> {
        return this.prismaService.bibleClass.findUnique({
            where: {
                id: id,
            },
        });
    }

    async bibleClassesByName(name: string): Promise<BibleClass[]> {
        return this.prismaService.bibleClass.findMany({
            where: {
                name: {
                    contains: name,
                },
            },
        });
    }
}
