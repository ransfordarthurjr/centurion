import { Args, Query, Resolver } from '@nestjs/graphql';
import { MaritalStatusService } from './marital-status.service';
import { MaritalStatus } from './marital-status.model';
import { ArgId } from 'src/models/graphql.args';

@Resolver()
export class MaritalStatusResolver {
    constructor(private readonly maritalStatusService: MaritalStatusService) {}

    @Query((returns) => [MaritalStatus])
    async maritalStatuses(): Promise<MaritalStatus[]> {
        return this.maritalStatusService.maritalStatuses();
    }

    @Query((returns) => MaritalStatus, { nullable: true })
    async maritalStatusById(@Args() argId: ArgId): Promise<MaritalStatus> {
        const { id } = argId;
        return this.maritalStatusService.maritalStatusById(id);
    }
}
