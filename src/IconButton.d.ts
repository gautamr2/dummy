import React from 'react';
import { IconProps } from './Icon';
export interface IconButtonProps extends React.HTMLProps<HTMLSpanElement> {
    icon: IconProps['icon'];
    variant?: 'delete' | 'add';
    disabled?: boolean;
}
export declare const IconButton: React.SFC<IconButtonProps>;
