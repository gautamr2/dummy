import React from 'react';
import { Actions } from 'downshift';
interface MenuDefaultOpenerProps<SelectionType> {
    openMenu: Actions<SelectionType>['openMenu'];
}
export declare class MenuDefaultOpener<SelectionType> extends React.Component<MenuDefaultOpenerProps<SelectionType>> {
    componentDidMount: () => void;
    componentDidUpdate: (prevProps: MenuDefaultOpenerProps<SelectionType>) => void;
    render: () => any;
}
export {};
