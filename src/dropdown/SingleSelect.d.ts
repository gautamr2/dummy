import React from 'react';
import { PropGetters, DownshiftProps } from 'downshift';
import { SelectPropsToExtend, BaseOptionRendererProps, BaseSelectState } from './BaseSelect';
interface OptionRendererProps<SelectionType> {
    highlightedIndex: number | null;
    index: number;
    itemProps: ReturnType<PropGetters<SelectionType>['getItemProps']>;
    selection?: SelectionType;
    option: SelectionType;
    getItemLabel: SingleSelectProps<SelectionType>['getItemLabel'];
    getItemKey: SingleSelectProps<SelectionType>['getItemKey'];
    disabled?: boolean;
    style?: React.CSSProperties;
}
export declare class OptionRenderer<SelectionType> extends React.PureComponent<OptionRendererProps<SelectionType>> {
    render: () => JSX.Element;
}
interface BaseSingleSelectProps<SelectionType> {
    selection?: SelectionType;
    onChange?(selection?: SelectionType): void;
}
export declare type SingleSelectProps<SelectionType> = BaseSingleSelectProps<SelectionType> & SelectPropsToExtend<SelectionType>;
interface SingleSelectState {
    inputValue: string;
}
export declare class SingleSelect<SelectionType> extends React.Component<SingleSelectProps<SelectionType>, SingleSelectState> {
    readonly state: {
        inputValue: string;
    };
    onDownshiftChange: DownshiftProps<SelectionType>['onChange'];
    getTriggerLabel: () => JSX.Element;
    renderOption: (baseProps: BaseOptionRendererProps<SelectionType>) => JSX.Element;
    isTriggerOverflowing: (triggerRef: React.RefObject<HTMLDivElement>) => boolean;
    renderTrigger: (triggerRef: React.RefObject<HTMLDivElement>, triggerId: string, getToggleButtonProps: (options?: import("downshift").GetToggleButtonPropsOptions) => any) => JSX.Element;
    getFlattenedOptions: () => readonly SelectionType[];
    stateReducer: DownshiftProps<SelectionType>['stateReducer'];
    onStateChange: (newState: BaseSelectState) => void;
    render(): JSX.Element;
}
export {};
