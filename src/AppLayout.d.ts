import { ReactNode, SFC } from 'react';
interface AppLayoutProps {
    navbar: ReactNode;
    sidenav: ReactNode;
    content: ReactNode;
    switchers?: ReactNode;
}
export declare const AppLayout: SFC<AppLayoutProps>;
export {};
