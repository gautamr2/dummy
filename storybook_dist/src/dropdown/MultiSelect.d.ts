import React from 'react';
import { DownshiftProps, PropGetters } from 'downshift';
import { SelectPropsToExtend, BaseOptionRendererProps, BaseSelectState } from './BaseSelect';
interface OptionRendererProps<SelectionType> {
    highlightedIndex: number | null;
    index: number;
    disabled?: boolean;
    itemProps: ReturnType<PropGetters<SelectionType>['getItemProps']>;
    selections: ReadonlyArray<SelectionType>;
    option: SelectionType;
    getItemLabel: MultiSelectProps<SelectionType>['getItemLabel'];
    getItemKey: MultiSelectProps<SelectionType>['getItemKey'];
    style?: React.CSSProperties;
}
export declare class OptionRenderer<SelectionType> extends React.PureComponent<OptionRendererProps<SelectionType>> {
    render: () => JSX.Element;
}
interface BaseMultiSelectProps<SelectionType> {
    selections: ReadonlyArray<SelectionType>;
    showSelectAll?: boolean;
    onChange?(selections: ReadonlyArray<SelectionType>): void;
}
export declare type MultiSelectProps<SelectionType> = BaseMultiSelectProps<SelectionType> & SelectPropsToExtend<SelectionType>;
export declare class MultiSelect<SelectionType> extends React.Component<MultiSelectProps<SelectionType>, BaseSelectState> {
    readonly state: BaseSelectState;
    onDownshiftChange: DownshiftProps<SelectionType>['onChange'];
    getAllOptions: () => readonly SelectionType[];
    getAllAvailableOptions: () => readonly SelectionType[];
    areAllSelected: () => boolean;
    onSelectAllClicked: () => void;
    selectAll: () => void;
    deselectAll: () => void;
    stateReducer: DownshiftProps<SelectionType>['stateReducer'];
    shouldShowSelectAll: () => boolean;
    getBaseIndexOffset: () => 0 | 1;
    getTriggerLabel: () => JSX.Element;
    renderOption: (baseProps: BaseOptionRendererProps<SelectionType>) => JSX.Element;
    renderSelectAll: (highlightedIndex: number, getItemProps: (options: import("downshift").GetItemPropsOptions<SelectionType>) => any) => JSX.Element;
    isTriggerOverflowing: (triggerRef: React.RefObject<HTMLDivElement>) => boolean;
    renderTrigger: (triggerRef: React.RefObject<HTMLDivElement>, triggerId: string, getToggleButtonProps: (options?: import("downshift").GetToggleButtonPropsOptions) => any) => JSX.Element;
    getBaseProps: () => {
        selection: readonly SelectionType[];
        onChange?: (selections: readonly SelectionType[]) => void;
        label?: string;
        enableSearch?: boolean;
        placeholder?: string;
        searchPlaceholder?: string;
        tabbable?: boolean;
        inline?: boolean;
        defaultOpen?: boolean;
        disabled?: boolean;
        loading?: boolean;
        virtualize?: boolean | Partial<import("./BaseSelect").VirtualizeOptions>;
        getItemKey: (item?: SelectionType) => string;
        getItemLabel: (item?: SelectionType) => string;
        isItemDisabled?: (item: SelectionType) => boolean;
        options: readonly SelectionType[];
        children?: React.ReactNode;
    } | {
        selection: readonly SelectionType[];
        onChange?: (selections: readonly SelectionType[]) => void;
        label?: string;
        enableSearch?: boolean;
        placeholder?: string;
        searchPlaceholder?: string;
        tabbable?: boolean;
        inline?: boolean;
        defaultOpen?: boolean;
        disabled?: boolean;
        loading?: boolean;
        virtualize?: boolean | Partial<import("./BaseSelect").VirtualizeOptions>;
        getItemKey: (item?: SelectionType) => string;
        getItemLabel: (item?: SelectionType) => string;
        isItemDisabled?: (item: SelectionType) => boolean;
        sections: readonly import("./BaseSelect").SelectSection<SelectionType>[];
        children?: React.ReactNode;
    };
    onStateChange: (newState: BaseSelectState) => void;
    render(): JSX.Element;
}
export {};
