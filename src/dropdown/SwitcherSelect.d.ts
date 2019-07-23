import React from 'react';
import { PropGetters, DownshiftProps } from 'downshift';
import { SelectPropsToExtend, BaseOptionRendererProps, BaseSelectState } from './BaseSelect';
import { NavIconName } from '../NavIcon';
interface OptionRendererProps<SelectionType> {
    highlightedIndex: number | null;
    index: number;
    itemProps: ReturnType<PropGetters<SelectionType>['getItemProps']>;
    selection?: SelectionType;
    option: SelectionType;
    getItemLabel: SwitcherSelectProps<SelectionType>['getItemLabel'];
    getItemKey: SwitcherSelectProps<SelectionType>['getItemKey'];
    style?: React.CSSProperties;
}
export declare class OptionRenderer<SelectionType> extends React.PureComponent<OptionRendererProps<SelectionType>> {
    render: () => JSX.Element;
}
interface BaseSwitcherSelectProps<SelectionType> {
    icon: NavIconName;
    selection?: SelectionType;
    miniTitle?: string;
    onChange?(selection?: SelectionType): void;
}
export declare type SwitcherSelectProps<SelectionType> = BaseSwitcherSelectProps<SelectionType> & SelectPropsToExtend<SelectionType>;
interface SwitcherSelectState {
    inputValue: string;
}
export declare class SwitcherSelect<SelectionType> extends React.Component<SwitcherSelectProps<SelectionType>, SwitcherSelectState> {
    readonly state: {
        inputValue: string;
    };
    onDownshiftChange: DownshiftProps<SelectionType>['onChange'];
    renderOption: (baseProps: BaseOptionRendererProps<SelectionType>) => JSX.Element;
    renderTrigger: (triggerRef: React.RefObject<HTMLDivElement>, triggerId: string, getToggleButtonProps: (options?: import("downshift").GetToggleButtonPropsOptions) => any) => JSX.Element;
    onStateChange: (newState: BaseSelectState) => void;
    showSearch: () => boolean;
    render(): JSX.Element;
}
export {};
