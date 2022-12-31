import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { PaymentType } from './payment-type.model';

@Injectable()
export class PaymentTypeService {
    constructor(private readonly prismaService: PrismaService) {}

    async paymentsTypes(): Promise<PaymentType[]> {
        return this.prismaService.paymentType.findMany();
    }

    async paymentTypeById(id: number): Promise<PaymentType> {
        return this.prismaService.paymentType.findUnique({
            where: {
                id: id,
            },
        });
    }
}
