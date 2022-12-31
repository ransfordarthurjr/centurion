import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Gender } from './gender.model';

@Injectable()
export class GenderService {
    constructor(private readonly prismaService: PrismaService) {}

    async genders(): Promise<Gender[]> {
        return this.prismaService.gender.findMany();
    }

    async genderById(id: number): Promise<Gender> {
        return this.prismaService.gender.findUnique({
            where: {
                id: id,
            },
        });
    }
}
