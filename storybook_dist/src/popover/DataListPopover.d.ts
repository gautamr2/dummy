import React from 'react';
import { HoverablePopoverProps } from './HoverablePopover';
export interface DataListPopoverProps {
    children: React.ReactElement;
    label: string;
    data: ReadonlyArray<string>;
    hidePopover?: boolean;
    positionPreset?: HoverablePopoverProps['positionPreset'];
    className?: string;
}
export declare const DataListPopover: React.FunctionComponent<DataListPopoverProps>;
