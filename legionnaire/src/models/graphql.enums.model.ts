import { registerEnumType } from '@nestjs/graphql';

export enum Booleany {
    truthy = 'truthy',
    falsey = 'falsey',
}

registerEnumType(Booleany, {
    name: 'Booleany',
    description: 'The supported Booleany Enums.',
});
