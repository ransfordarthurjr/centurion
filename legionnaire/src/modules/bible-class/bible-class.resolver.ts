import { Args, Query, Resolver } from '@nestjs/graphql';
import { BibleClass } from './bible-class.model';
import { ArgId, ArgName } from 'src/models/graphql.args';
import { BibleClassService } from './bible-class.service';

@Resolver()
export class BibleClassResolver {
    constructor(private readonly bibleClassService: BibleClassService) {}

    @Query((returns) => [BibleClass])
    async bibleClasses(): Promise<BibleClass[]> {
        return this.bibleClassService.bibleClasses();
    }

    @Query((returns) => BibleClass, { nullable: true })
    async countryById(@Args() argsId: ArgId): Promise<BibleClass> {
        const { id } = argsId;
        return this.bibleClassService.bibleClassById(id);
    }

    @Query((returns) => [BibleClass], { nullable: true })
    async bibleClassesByName(@Args() argName: ArgName): Promise<BibleClass[]> {
        const { name } = argName;
        return this.bibleClassService.bibleClassesByName(name);
    }
}
