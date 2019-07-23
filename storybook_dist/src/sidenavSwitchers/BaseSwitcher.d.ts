import React, { ReactElement } from 'react';
import { NavIconName } from '../NavIcon';
export interface BaseSwitcherProps {
    icon: NavIconName;
    title: string | ReactElement;
    selectionDisplay: string | ReactElement;
    onClick?(): void;
}
export declare const BaseSwitcher: React.FunctionComponent<BaseSwitcherProps>;
