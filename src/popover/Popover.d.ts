import React, { FunctionComponent } from 'react';
import { PositionPreset } from './BasePopover';
declare type ClickableAnchor = (onAnchorClicked: () => void) => JSX.Element;
export interface PopoverProps {
    content: React.ReactNode;
    positionPreset?: PositionPreset;
    className?: string;
    anchor: JSX.Element | ClickableAnchor;
    hidePopover?: boolean;
}
export declare const Popover: FunctionComponent<PopoverProps>;
export {};
