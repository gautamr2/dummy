import { FunctionComponent, ReactNode } from 'react';
import { ChipProps as MuiChipProps } from '@material-ui/core/Chip';
export interface BaseChipProps extends Pick<MuiChipProps, 'id' | 'variant' | 'clickable' | 'onDelete' | 'onClick'> {
    label: ReactNode;
    dataValue?: number;
    selected?: boolean;
}
export declare const BaseChip: FunctionComponent<BaseChipProps>;
