import { Args, Query, Resolver } from '@nestjs/graphql';
import { OrganizationService } from './organization.service';
import { Organization } from './organization.model';
import { ArgId } from 'src/models/graphql.args';

@Resolver((of) => Organization)
export class OrganizationResolver {
    constructor(private readonly organizationService: OrganizationService) {}

    @Query((returns) => [Organization])
    async organizations(): Promise<Organization[]> {
        return this.organizationService.organizations();
    }

    @Query((returns) => Organization, { nullable: true })
    async organizationById(@Args() argId: ArgId): Promise<Organization> {
        const { id } = argId;
        return this.organizationService.organizationById(id);
    }
}
