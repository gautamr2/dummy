import React from 'react';
import { FixedSizeListProps } from 'react-window';
interface VirtualizedListProps extends FixedSizeListProps {
    scrollToIndex?: number;
}
export declare const VirtualizedList: React.FunctionComponent<VirtualizedListProps>;
export {};
