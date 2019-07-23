import React, { FunctionComponent } from 'react';
import { BreadcrumbProps } from '../Breadcrumbs';
export interface PageLayoutProps {
    actions?: React.ReactNode;
    alerts?: React.ReactNode;
    breadcrumbs: BreadcrumbProps['breadcrumbs'];
    pageScroll?: boolean;
    title: string;
}
export declare const PageLayout: FunctionComponent<PageLayoutProps>;
