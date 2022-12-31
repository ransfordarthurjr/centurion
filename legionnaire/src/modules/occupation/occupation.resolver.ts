import { Args, Query, Resolver } from '@nestjs/graphql';
import { OccupationService } from './occupation.service';
import { Occupation } from './occupation.model';
import { ArgId, ArgName } from 'src/models/graphql.args';
import { OccupationIndustry } from './occupation-industry.model';

@Resolver((of) => Occupation)
export class OccupationResolver {
    constructor(private readonly occupationService: OccupationService) {}

    @Query((returns) => [Occupation])
    async occupations(): Promise<Occupation[]> {
        return this.occupationService.occupations();
    }

    @Query((returns) => Occupation, { nullable: true })
    async occupationById(@Args() argId: ArgId): Promise<Occupation> {
        const { id } = argId;
        return this.occupationService.occupationById(id);
    }

    @Query((returns) => [Occupation], { nullable: true })
    async occupationsByName(@Args() argName: ArgName): Promise<Occupation[]> {
        const { name } = argName;
        return this.occupationService.occupationsByName(name);
    }

    @Query((returns) => [OccupationIndustry])
    async occupationIndustries(): Promise<OccupationIndustry[]> {
        return this.occupationService.occupationIndustries();
    }

    @Query((returns) => OccupationIndustry, { nullable: true })
    async occupationIndustryById(
        @Args() argId: ArgId,
    ): Promise<OccupationIndustry> {
        const { id } = argId;
        return this.occupationService.occupationIndustryById(id);
    }

    @Query((returns) => [OccupationIndustry], { nullable: true })
    async occupationIndustriesByName(
        @Args() argName: ArgName,
    ): Promise<OccupationIndustry[]> {
        const { name } = argName;
        return this.occupationService.occupationIndustriesByName(name);
    }
}
