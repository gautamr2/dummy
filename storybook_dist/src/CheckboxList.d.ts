import React from 'react';
export interface CheckboxListProps<DataType> {
    selections: ReadonlyArray<DataType>;
    options: ReadonlyArray<DataType>;
    disableSearch?: boolean | ((searchValue: string) => boolean);
    searchValue?: string;
    hideSearch?: boolean;
    loading?: boolean;
    searchOnCommand?: boolean;
    hideSelectAll?: boolean;
    getId(option: DataType): string | number;
    getLabel(option: DataType): string;
    getSearchFields?(option: DataType): ReadonlyArray<string>;
    customSearch?(searchValue: string, option: DataType): boolean;
    onSearch?(searchValue: string): void;
    onSelect?(selections: ReadonlyArray<DataType>): void;
}
export interface CheckboxListState<DataType> {
    searchValue?: string;
    displayOptions: ReadonlyArray<DataType>;
}
export declare class CheckboxList<DataType> extends React.Component<CheckboxListProps<DataType>, CheckboxListState<DataType>> {
    constructor(props: CheckboxListProps<DataType>);
    isSelected: (option: DataType) => boolean;
    selectOption: (option: DataType) => void;
    deselectOption: (option: DataType) => void;
    toggleOption: (option: DataType) => (selected: boolean) => void;
    areAllSelected: () => boolean;
    selectAllIndeterminate: () => boolean;
    selectAllClicked: () => void;
    selectAll: () => void;
    deselectAll: () => void;
    onSearch: (searchValue: string) => void;
    getOptions: (searchValue?: string) => readonly DataType[];
    searchOptions: (searchValue: string) => DataType[];
    searchFields: (searchValue: string, option: DataType) => boolean;
    defaultSearch: (searchValue: string, option: DataType) => boolean;
    componentDidUpdate(prevProps: CheckboxListProps<DataType>): void;
    getSearchValueOnUpdate: (prevProps: CheckboxListProps<DataType>) => string;
    render(): JSX.Element;
}
