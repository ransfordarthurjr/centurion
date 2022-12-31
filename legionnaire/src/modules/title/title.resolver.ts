import { Args, Query, Resolver } from '@nestjs/graphql';
import { TitleService } from './title.service';
import { Title } from './title.model';
import { ArgId } from 'src/models/graphql.args';

@Resolver((of) => Title)
export class TitleResolver {
    constructor(private readonly titleService: TitleService) {}

    @Query((returns) => [Title])
    async titles(): Promise<Title[]> {
        return this.titleService.titles();
    }

    @Query((returns) => Title, { nullable: true })
    async titleById(@Args() argId: ArgId): Promise<Title> {
        const { id } = argId;
        return this.titleService.titleById(id);
    }
}
