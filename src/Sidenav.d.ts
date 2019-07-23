import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { NavIconName } from './NavIcon';
interface SidenavDisplayable {
    name: string;
    beta?: boolean;
    groupingKey: string;
}
export interface SidenavRoute extends SidenavDisplayable {
    url: string;
    parentGroupingKey: string;
}
interface SidenavContainer<T> extends SidenavDisplayable {
    items: ReadonlyArray<T>;
    parentGroupingKey: string;
}
export interface SidenavSection extends SidenavContainer<SidenavRoute> {
}
export interface SidenavTopLevel extends SidenavDisplayable {
    items: SidenavContainer<SidenavSection | SidenavRoute>['items'];
    icon: NavIconName;
}
export declare type SidenavSchema = ReadonlyArray<SidenavTopLevel>;
interface SidenavProps extends RouteComponentProps<{}> {
    items: SidenavSchema;
    pathToCurrentItem?: ReadonlyArray<string>;
}
export declare const Sidenav: React.ComponentClass<Pick<SidenavProps, "items" | "pathToCurrentItem">, any>;
export {};
