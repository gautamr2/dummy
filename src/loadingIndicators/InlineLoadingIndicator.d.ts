import React from 'react';
export interface InlineLoadingIndicatorProps {
    left?: boolean;
    fill?: boolean | 'horizontal' | 'vertical';
    messageId?: string;
}
export declare const InlineLoadingIndicator: React.FunctionComponent<InlineLoadingIndicatorProps>;
