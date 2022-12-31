import { Module } from '@nestjs/common';
import { AltarServerTypeService } from './altar-server-type.service';
import { AltarServerTypeResolver } from './altar-server-type.resolver';

@Module({
  providers: [AltarServerTypeService, AltarServerTypeResolver]
})
export class AltarServerTypeModule {}
