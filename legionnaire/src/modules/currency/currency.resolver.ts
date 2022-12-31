import { Args, Query, Resolver } from '@nestjs/graphql';
import { CurrencyService } from './currency.service';
import { Currency } from './currency.model';
import { ArgId, ArgName } from 'src/models/graphql.args';

@Resolver((of) => Currency)
export class CurrencyResolver {
    constructor(private readonly currencyService: CurrencyService) {}

    @Query((returns) => [Currency])
    async currencies(): Promise<Currency[]> {
        return this.currencyService.currencies();
    }

    @Query((returns) => Currency, { nullable: true })
    async currencyById(@Args() argId: ArgId): Promise<Currency> {
        const { id } = argId;
        return this.currencyService.currencyById(id);
    }

    @Query((returns) => [Currency], { nullable: true })
    async currenciesByName(@Args() argName: ArgName): Promise<Currency[]> {
        const { name } = argName;
        return this.currencyService.currenciesByName(name);
    }
}
