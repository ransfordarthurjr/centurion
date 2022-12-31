import { Args, Query, Resolver } from '@nestjs/graphql';
import { GenderService } from './gender.service';
import { Gender } from './gender.model';
import { ArgId } from 'src/models/graphql.args';

@Resolver((of) => Gender)
export class GenderResolver {
    constructor(private readonly genderService: GenderService) {}

    @Query((returns) => [Gender])
    async genders(): Promise<Gender[]> {
        return this.genderService.genders();
    }

    @Query((returns) => Gender, { nullable: true })
    async genderById(@Args() argId: ArgId): Promise<Gender> {
        const { id } = argId;
        return this.genderService.genderById(id);
    }
}
