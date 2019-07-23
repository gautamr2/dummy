import { FunctionComponent } from 'react';
import { ButtonProps } from './Button';
declare type EmptyStateActionProps = Exclude<Omit<ButtonProps, 'chtVariant'>, 'icon'> & Required<Pick<ButtonProps, 'icon'>>;
export interface EmptyStateProps {
    actions?: readonly EmptyStateActionProps[];
}
export declare const EmptyState: FunctionComponent<EmptyStateProps>;
export {};
