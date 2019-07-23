import { FunctionComponent } from 'react';
import { BaseChipProps } from './BaseChip';
export interface KeyValueChipProps {
    onClick: NonNullable<BaseChipProps['onClick']>;
    onDelete: NonNullable<BaseChipProps['onDelete']>;
    exclude?: boolean;
    label: string;
    value: string | readonly string[];
}
export declare const KeyValueChip: FunctionComponent<KeyValueChipProps>;
