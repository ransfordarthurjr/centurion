import { Module } from '@nestjs/common';
import { PaymentTitheService } from './payment-tithe.service';
import { PaymentTitheResolver } from './payment-tithe.resolver';

@Module({
  providers: [PaymentTitheService, PaymentTitheResolver]
})
export class PaymentTitheModule {}
