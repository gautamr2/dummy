import React, { ChangeEvent } from 'react';
export interface ExpansionPanelProps {
    summary: React.ReactNode;
    children: React.ReactNode;
    variant?: 'borderless' | 'dense';
    expanded?: boolean;
    adornment?: React.ReactNode;
    lazyChildRender?: boolean;
    defaultExpanded?: boolean;
    disabled?: boolean;
    onChange?(expanded: boolean, event?: ChangeEvent<{}>): void;
}
interface ExpansionPanelState {
    expanded: boolean;
    hasExpanded: boolean;
}
export declare class ExpansionPanel extends React.Component<ExpansionPanelProps, ExpansionPanelState> {
    constructor(props: ExpansionPanelProps);
    componentDidUpdate: (prevProps: ExpansionPanelProps) => void;
    onChange: (event: React.ChangeEvent<{}>, expanded: boolean) => void;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    getPanelIcon: () => import("@fortawesome/fontawesome-common-types").IconName;
    getDenseIcon: () => import("@fortawesome/fontawesome-common-types").IconName;
    render: () => JSX.Element;
    renderVariant: (variant: "dense" | "borderless") => JSX.Element;
    shouldRenderChildren(): boolean;
    renderPanel: () => JSX.Element;
}
export {};
