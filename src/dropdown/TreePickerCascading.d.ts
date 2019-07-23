import React from 'react';
import { StateChangeOptions } from 'downshift';
export interface TreePickerCascadingProps<SelectionType> {
    options: ReadonlyArray<SelectionType>;
    selections: ReadonlyArray<SelectionType>;
    enableSearch?: boolean;
    label: string;
    placeholder?: string;
    inline?: boolean;
    getItemKey(item: SelectionType): string;
    getItemLabel(item: SelectionType): string;
    getItemChildren(item: SelectionType): ReadonlyArray<SelectionType>;
    onChange?(selection: ReadonlyArray<SelectionType>): void;
}
export interface TreePickerCascadingState {
    inputValue: string;
    internalSelections: Record<string, boolean>;
    expansion: Record<string, boolean>;
    searchedOptions: Record<string, boolean>;
}
export declare class TreePickerCascading<SelectionType> extends React.Component<TreePickerCascadingProps<SelectionType>, TreePickerCascadingState> {
    readonly triggerRef: React.RefObject<HTMLDivElement>;
    constructor(props: TreePickerCascadingProps<SelectionType>);
    componentDidUpdate: (prevProps: TreePickerCascadingProps<SelectionType>) => void;
    getInitialInternalSelections: () => Record<string, boolean>;
    getInitialExpansion: () => Record<string, boolean>;
    cacheNodeSearchResults: (option: SelectionType, searchTerm: string) => boolean;
    cleanSearchTerm: (inputValue?: string) => string;
    optionMatchesSearch: (option: SelectionType, searchTerm: string) => boolean;
    cacheSearchResults: (options: readonly SelectionType[], searchTerm: string) => readonly SelectionType[];
    onSearchChange: (event?: React.ChangeEvent<HTMLInputElement>, value?: string) => void;
    splitBy: <T>(items: readonly T[], predicate: (item: T) => boolean) => {
        true: readonly T[];
        false: readonly T[];
    };
    findSelectedOptions: (options: readonly SelectionType[], selections: Record<string, boolean>) => readonly SelectionType[];
    onUpdateClick: (closeMenu: () => void) => () => void;
    onStateChange: (changes: StateChangeOptions<SelectionType>) => void;
    getTriggerLabel: () => JSX.Element;
    onExpandedChange: (key: string) => (expanded: boolean) => void;
    getParentFromAncestors: (array: readonly SelectionType[]) => SelectionType;
    deselectChildWhenParentSelected: (option: SelectionType, parentOption: SelectionType) => {
        [x: string]: boolean;
    };
    deselectAncestors: (option: SelectionType, ancestors: readonly SelectionType[]) => Record<string, boolean>;
    deselectSubtree: (option: SelectionType) => Record<string, boolean>;
    isOptionSelected: (option: SelectionType, selections?: Record<string, boolean>) => boolean;
    getSiblings: (option: SelectionType, parent: SelectionType) => SelectionType[];
    areSiblingsSelected: (option: SelectionType, parent: SelectionType, selections: Record<string, boolean>) => boolean;
    getSelectedAncestors: (ancestors: readonly SelectionType[]) => SelectionType[];
    onCheckboxChange: (option: SelectionType, ancestors: readonly SelectionType[]) => (checked: boolean) => void;
    renderSearchInput: (props: import("downshift").GetInputPropsOptions) => JSX.Element;
    getSearchedOptions: (options: readonly SelectionType[]) => readonly SelectionType[];
    makeTriggerId: (getInputProps: <T>(options?: T) => T & import("downshift").GetInputPropsOptions) => string;
    renderMenu: (getItemProps: (options: import("downshift").GetItemPropsOptions<SelectionType>) => any) => JSX.Element[];
    renderOptions: (options: readonly SelectionType[], getItemProps: (options: import("downshift").GetItemPropsOptions<SelectionType>) => any, ancestors: readonly SelectionType[]) => JSX.Element[];
    renderOption: ({ option, getItemProps, ancestors, }: {
        option: SelectionType;
        getItemProps: (options: import("downshift").GetItemPropsOptions<SelectionType>) => any;
        ancestors: readonly SelectionType[];
    }) => JSX.Element;
    render(): JSX.Element;
}
