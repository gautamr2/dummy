import React from 'react';
import { DownshiftProps, PropGetters } from 'downshift';
import { PopperProps as MuiPopperProps } from '@material-ui/core/Popper';
export declare const isSectionProps: <SelectionType>(props: WithOptions<SelectionType> | WithSections<SelectionType>) => props is WithSections<SelectionType>;
export declare const cleanSearchTerm: (val?: string) => string;
export interface VirtualizeOptions {
    itemSize: number;
    height: number;
    width: number;
}
export interface BaseOptionRendererProps<SelectionType> {
    highlightedIndex: number | null;
    index: number;
    disabled?: boolean;
    itemProps: ReturnType<PropGetters<SelectionType>['getItemProps']>;
    option: SelectionType;
    getItemLabel: BaseSelectProps<SelectionType>['getItemLabel'];
    getItemKey: BaseSelectProps<SelectionType>['getItemKey'];
    style?: React.CSSProperties;
}
export interface Section<SelectionType> {
    label: string;
    options: ReadonlyArray<SelectionType>;
}
export interface SelectSection<SelectionType> extends Section<SelectionType> {
}
export interface CommonSelectProps<SelectionType> {
    label?: string;
    enableSearch?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    tabbable?: boolean;
    inline?: boolean;
    defaultOpen?: boolean;
    disabled?: boolean;
    loading?: boolean;
    selection?: SelectionType | ReadonlyArray<SelectionType>;
    virtualize?: boolean | Partial<VirtualizeOptions>;
    getItemKey(item?: SelectionType): string;
    getItemLabel(item?: SelectionType): string;
    isItemDisabled?(item: SelectionType): boolean;
}
export interface WithOptions<SelectionType> {
    options: ReadonlyArray<SelectionType>;
}
export interface WithSections<SelectionType> {
    sections: ReadonlyArray<SelectSection<SelectionType>>;
}
export interface ImplementationProps<SelectionType> {
    rootClassName: string;
    onDownshiftChange?: DownshiftProps<SelectionType>['onChange'];
    stateReducer?: DownshiftProps<SelectionType>['stateReducer'];
    popperModifiers?: MuiPopperProps['modifiers'];
    searchOnBottom?: boolean;
    miniTitle?: string;
    renderOption(props: BaseOptionRendererProps<SelectionType>): React.ReactNode;
    renderTrigger(triggerRef: React.RefObject<HTMLDivElement>, triggerId: string, getToggleButtonProps: PropGetters<SelectionType>['getToggleButtonProps']): React.ReactNode;
    renderSelectAll?(highlightedIndex: number | null, getItemProps: PropGetters<SelectionType>['getItemProps']): React.ReactNode;
    getBaseIndexOffset?(): number;
    onStateChange(newState: BaseSelectState): void;
}
export declare type SelectPropsToExtend<SelectionType> = CommonSelectProps<SelectionType> & (WithOptions<SelectionType> | WithSections<SelectionType>);
export declare type BaseSelectProps<SelectionType> = ImplementationProps<SelectionType> & CommonSelectProps<SelectionType> & (WithOptions<SelectionType> | WithSections<SelectionType>);
interface PopperCreateEvent {
    instance: {
        scheduleUpdate(): void;
    };
}
export interface BaseSelectState {
    inputValue: string;
    isOpen: boolean;
}
export declare class BaseSelect<SelectionType> extends React.Component<BaseSelectProps<SelectionType>, BaseSelectState> {
    readonly triggerRef: React.RefObject<HTMLDivElement>;
    readonly state: BaseSelectState;
    schedulePopperUpdate?: () => void;
    updatePopperPosition: () => void;
    hasOptions: () => boolean;
    hasSearchedOptions: (options: readonly SelectionType[]) => boolean;
    onPopperCreate: (data: PopperCreateEvent) => void;
    componentDidUpdate: (prevProps: BaseSelectProps<SelectionType>) => void;
    searchOptions: (options: readonly SelectionType[], inputValue: string) => readonly SelectionType[];
    onSearchChange: (event?: React.ChangeEvent<HTMLInputElement>, value?: string) => void;
    getBaseIndexOffset: () => number;
    onDownshiftStateChange: DownshiftProps<SelectionType>['onStateChange'];
    renderSearchInput: (props: import("downshift").GetInputPropsOptions) => JSX.Element;
    makeTriggerId: (getInputProps: <T>(options?: T) => T & import("downshift").GetInputPropsOptions) => string;
    renderMenu: (highlightedIndex: number, getItemProps: (options: import("downshift").GetItemPropsOptions<SelectionType>) => any) => JSX.Element | {}[];
    renderSections: (sections: readonly SelectSection<SelectionType>[], highlightedIndex: number, getItemProps: (options: import("downshift").GetItemPropsOptions<SelectionType>) => any) => JSX.Element[];
    renderSearchedOptions: (options: readonly SelectionType[], highlightedIndex: number, getItemProps: (options: import("downshift").GetItemPropsOptions<SelectionType>) => any) => JSX.Element | {}[];
    renderOptions: (options: readonly SelectionType[], highlightedIndex: number, getItemProps: (options: import("downshift").GetItemPropsOptions<SelectionType>) => any, indexOffset?: number) => {}[];
    getVirtualizeOptions: () => VirtualizeOptions;
    renderVirtualizedOptions: (options: readonly SelectionType[], highlightedIndex: number, getItemProps: (options: import("downshift").GetItemPropsOptions<SelectionType>) => any, indexOffset?: number) => JSX.Element;
    determineWidthConstraints: (triggerRef?: React.RefObject<HTMLDivElement>) => {
        minWidth: number;
        maxWidth: string;
    };
    render(): JSX.Element;
}
export {};
