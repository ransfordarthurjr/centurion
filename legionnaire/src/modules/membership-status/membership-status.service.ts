import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { MembershipStatus } from './membership-status.model';

@Injectable()
export class MembershipStatusService {
    constructor(private readonly prismaService: PrismaService) {}

    async membershipStatuses(): Promise<MembershipStatus[]> {
        return this.prismaService.membershipStatus.findMany();
    }

    async membershipStatusById(id: number): Promise<MembershipStatus> {
        return this.prismaService.membershipStatus.findUnique({
            where: {
                id: id,
            },
        });
    }
}
