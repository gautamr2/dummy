import React from 'react';
declare type TextVariants = 'text-5xl' | 'text-4xl' | 'text-3xl' | 'text-2xl' | 'text-xl' | 'text-lg' | 'text-md' | 'text-sm' | 'text-2xm' | 'text-2xm-bold';
export interface InlineEditableTextProps {
    value: string;
    placeholder?: string;
    disallowEmpty?: boolean;
    editable?: boolean;
    variant?: TextVariants;
    onValueChange?(value: string): void | Promise<any>;
}
export declare const InlineEditableText: React.FunctionComponent<InlineEditableTextProps>;
export {};
