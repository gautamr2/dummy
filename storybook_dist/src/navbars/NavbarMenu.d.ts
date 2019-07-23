import React, { MouseEvent } from 'react';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { NavIconName } from '../NavIcon';
export interface MenuDivider {
    kind: 'divider';
}
export declare const menuDivider: MenuDivider;
interface BaseNavbarMenuItem {
    kind: 'item';
    label: string;
    secondaryLabel?: string;
    icon?: IconName;
}
interface NavbarMenuItemWithUrl extends BaseNavbarMenuItem {
    url: string;
}
interface NavbarMenuItemWithOnclick extends BaseNavbarMenuItem {
    onClick(event: MouseEvent<HTMLElement>): void;
}
export declare type NavbarMenuItem = NavbarMenuItemWithUrl | NavbarMenuItemWithOnclick;
export declare type NavbarMenuList = {
    label?: string;
    entries: ReadonlyArray<NavbarMenuItem>;
};
interface NavbarMenuState {
    anchorEl?: HTMLElement;
}
export interface NavbarMenuProps {
    entryLists: ReadonlyArray<NavbarMenuList>;
    icon: NavIconName;
}
export declare class NavbarMenu extends React.Component<NavbarMenuProps, NavbarMenuState> {
    state: {
        anchorEl: any;
    };
    handleOpen: (event: React.SyntheticEvent<HTMLElement, Event>) => void;
    handleClose: () => void;
    render(): JSX.Element;
}
export {};
