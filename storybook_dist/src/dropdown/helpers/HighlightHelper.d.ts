import React from 'react';
interface HighlightHelperProps {
    isOpen: boolean;
    highlightedIndex: number | null;
    setHighlightedIndex(highlightedIndex: number | null): void;
}
export declare const HighlightHelper: React.FunctionComponent<HighlightHelperProps>;
export {};
