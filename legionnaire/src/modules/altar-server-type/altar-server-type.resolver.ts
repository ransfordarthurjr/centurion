import { Args, Query, Resolver } from '@nestjs/graphql';
import { AltarServerTypeService } from './altar-server-type.service';
import { ArgId } from 'src/models/graphql.args';
import { AltarServerType } from './altar-server-type.model';

@Resolver()
export class AltarServerTypeResolver {
    constructor(
        private readonly altarServerTypeService: AltarServerTypeService,
    ) {}

    @Query((returns) => [AltarServerType])
    async altarServersTypes(): Promise<AltarServerType[]> {
        return this.altarServerTypeService.altarServersTypes();
    }

    @Query((returns) => AltarServerType, { nullable: true })
    async altarServerTypeById(@Args() argsId: ArgId): Promise<AltarServerType> {
        const { id } = argsId;
        return this.altarServerTypeService.altarServerTypeById(id);
    }
}
