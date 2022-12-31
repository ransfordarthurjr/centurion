import { Module } from '@nestjs/common';
import { BibleClassService } from './bible-class.service';
import { BibleClassResolver } from './bible-class.resolver';

@Module({
  providers: [BibleClassService, BibleClassResolver]
})
export class BibleClassModule {}
