import React from 'react';
import { PopoverProps as MuiPopoverProps } from '@material-ui/core/Popover';
export declare type PositionPreset = 'bottom' | 'top' | 'left' | 'right';
interface BasePopoverProps {
    anchorElement?: HTMLElement;
    positionPreset?: PositionPreset;
    onBlur?: MuiPopoverProps['onBlur'];
    onKeyUp?: MuiPopoverProps['onKeyUp'];
    onClose?(): void;
}
interface BasePopoverState {
    anchorElement?: HTMLElement;
    open: boolean;
}
export declare class BasePopover extends React.Component<BasePopoverProps, BasePopoverState> {
    constructor(props: BasePopoverProps);
    componentWillReceiveProps(nextProps: BasePopoverProps): void;
    render(): JSX.Element;
}
export {};
