import React from 'react';
import { NavbarMenuProps, NavbarMenuItem, MenuDivider } from './NavbarMenu';
interface NavbarLink {
    beta?: boolean;
    label: string;
    title: string;
    url: string;
}
interface LegacyNavbarMenuProps {
    icon: NavbarMenuProps['icon'];
    entries: ReadonlyArray<NavbarMenuItem | MenuDivider>;
}
export interface NavbarProps {
    activeLink: NavbarLink['url'];
    links: ReadonlyArray<NavbarLink>;
    menus: ReadonlyArray<NavbarMenuProps | LegacyNavbarMenuProps>;
    hideLogo?: boolean;
    logoUrl?: string;
}
export declare class Navbar extends React.Component<NavbarProps> {
    prepareMenus: (menus: readonly (NavbarMenuProps | LegacyNavbarMenuProps)[]) => readonly NavbarMenuProps[];
    render(): JSX.Element;
}
export {};
