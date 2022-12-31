import { Args, Query, Resolver } from '@nestjs/graphql';
import { ArgId } from 'src/models/graphql.args';
import { ChurchGroupService } from './church-group.service';
import { ChurchGroup } from './church-group.model';

@Resolver()
export class ChurchGroupResolver {
    constructor(private readonly churchGroupService: ChurchGroupService) {}

    @Query((returns) => [ChurchGroup])
    async churchGroups(): Promise<ChurchGroup[]> {
        return this.churchGroupService.churchGroups();
    }

    @Query((returns) => ChurchGroup, { nullable: true })
    async churchGroupById(@Args() argsId: ArgId): Promise<ChurchGroup> {
        const { id } = argsId;
        return this.churchGroupService.churchGroupById(id);
    }
}
