import { Args, Query, Resolver } from '@nestjs/graphql';
import { ArgId } from 'src/models/graphql.args';
import { CoordinatingOfficeService } from './coordinating-office.service';
import { CoordinatingOffice } from './coordinating-office.model';

@Resolver()
export class CoordinatingOfficeResolver {
    constructor(
        private readonly coordinatingOfficeService: CoordinatingOfficeService,
    ) {}

    @Query((returns) => [CoordinatingOffice])
    async coordinatingOffices(): Promise<CoordinatingOffice[]> {
        return this.coordinatingOfficeService.coordinatingOffices();
    }

    @Query((returns) => CoordinatingOffice, { nullable: true })
    async coordinatingOfficeById(
        @Args() argsId: ArgId,
    ): Promise<CoordinatingOffice> {
        const { id } = argsId;
        return this.coordinatingOfficeService.coordinatingOfficeById(id);
    }
}
