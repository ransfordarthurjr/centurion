import { Mode } from 'src/app/types/type';

export interface SidebarModeInterface {
    mode: Mode;
    width: string;

    'menu-item': {
        cls: string[];
        'text-cls': string[];
    };
}
