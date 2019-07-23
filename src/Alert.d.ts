import React, { SFC } from 'react';
import { IconName } from '@fortawesome/free-solid-svg-icons';
export declare type AlertVariants = 'info' | 'success' | 'danger' | 'warning';
export interface AlertProps {
    children: React.ReactNode;
    variant?: AlertVariants;
    dismissable?: boolean;
    hideIcon?: boolean;
    customIcon?: IconName;
    onDismiss?(): void;
}
export declare const Alert: SFC<AlertProps>;
