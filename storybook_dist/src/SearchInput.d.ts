import React from 'react';
export interface SearchInputProps {
    autoFocus?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    name?: string;
    placeholder?: string;
    value?: string;
    embeddedSearch?: boolean;
    inputProps?: React.HTMLProps<HTMLInputElement | HTMLTextAreaElement | HTMLDivElement>;
    onChange?(value?: string, event?: React.ChangeEvent<HTMLInputElement>): void;
    onSearch?(value?: string): void;
    onCancel?(): void;
}
interface SearchInputState {
    value?: string;
}
export declare class SearchInput extends React.Component<SearchInputProps, SearchInputState> {
    constructor(props: SearchInputProps);
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    onCancel: () => void;
    onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
