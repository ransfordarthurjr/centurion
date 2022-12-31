import { Args, Query, Resolver } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { ArgId, ArgName } from 'src/models/graphql.args';
import { Country } from './country.model';

@Resolver((of) => Country)
export class CountryResolver {
    constructor(private readonly countryService: CountryService) {}

    @Query((returns) => [Country])
    async countries(): Promise<Country[]> {
        return this.countryService.countries();
    }

    @Query((returns) => Country, { nullable: true })
    async countryById(@Args() argsId: ArgId): Promise<Country> {
        const { id } = argsId;
        return this.countryService.countryById(id);
    }

    @Query((returns) => [Country], { nullable: true })
    async countriesByName(@Args() argName: ArgName): Promise<Country[]> {
        const { name } = argName;
        return this.countryService.countriesByName(name);
    }
}
