import { Args, Query, Resolver } from '@nestjs/graphql';
import { PaymentTypeService } from './payment-type.service';
import { PaymentType } from './payment-type.model';
import { ArgId } from 'src/models/graphql.args';

@Resolver((of) => PaymentType)
export class PaymentTypeResolver {
    constructor(private readonly paymentTypeService: PaymentTypeService) {}

    @Query((returns) => [PaymentType])
    async paymentsTypes(): Promise<PaymentType[]> {
        return this.paymentTypeService.paymentsTypes();
    }

    @Query((returns) => PaymentType, { nullable: true })
    async paymentTypeById(@Args() argId: ArgId): Promise<PaymentType> {
        const { id } = argId;
        return this.paymentTypeService.paymentTypeById(id);
    }
}
