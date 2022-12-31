import { Module } from '@nestjs/common';
import { PaymentTypeService } from './payment-type.service';
import { PaymentTypeResolver } from './payment-type.resolver';

@Module({
  providers: [PaymentTypeService, PaymentTypeResolver]
})
export class PaymentTypeModule {}
