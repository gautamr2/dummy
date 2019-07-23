import { SFC } from 'react';
export interface BaseBreadcrumb {
    label: string;
}
export interface LinkBreadcrumb extends BaseBreadcrumb {
    link: string;
}
export interface AnchorBreadcrumb extends BaseBreadcrumb {
    href: string;
}
export declare type Breadcrumb = BaseBreadcrumb | AnchorBreadcrumb | LinkBreadcrumb;
export interface BreadcrumbProps {
    breadcrumbs: ReadonlyArray<Breadcrumb>;
}
export declare function toString(breadcrumbs: readonly Breadcrumb[]): string;
export declare const Breadcrumbs: SFC<BreadcrumbProps>;
