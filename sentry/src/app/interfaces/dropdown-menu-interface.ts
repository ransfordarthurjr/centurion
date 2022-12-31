import { DropdownMenuItemInterface } from 'src/app/interfaces/dropdown-menu-item-interface';

export interface DropdownMenuInterface {
    menuid: string;
    menuitems: Array<Array<DropdownMenuItemInterface>>;
}
