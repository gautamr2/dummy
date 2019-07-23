import React from 'react';
import { PositionPreset } from './BasePopover';
export interface HoverablePopoverProps {
    anchor: JSX.Element;
    content: React.ReactNode;
    positionPreset?: PositionPreset;
    className?: string;
    hidePopover?: boolean;
}
interface HoverablePopoverState {
    anchorEl?: HTMLElement;
}
export declare class HoverablePopover extends React.Component<HoverablePopoverProps, HoverablePopoverState> {
    constructor(props: HoverablePopoverProps);
    componentDidUpdate: (prevProps: HoverablePopoverProps) => void;
    handlePopoverOpen: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handlePopoverClose: () => void;
    render(): JSX.Element;
}
export {};
