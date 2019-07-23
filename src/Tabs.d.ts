import React from 'react';
import { TabProps as MuiTabProps } from '@material-ui/core/Tab';
declare type ValueTypeOptions = string | number;
export interface TabDef<ValueType extends ValueTypeOptions = string> {
    value: ValueType;
    labelIntlId?: string;
    icon?: MuiTabProps['icon'];
    disabled?: boolean;
}
export interface TabsProps<ValueType extends ValueTypeOptions = string> {
    value: ValueType;
    tabs: ReadonlyArray<TabDef<ValueType>>;
    centered?: boolean;
    divider?: boolean;
    onChange?(value: ValueType): void;
}
export declare class Tabs<ValueType extends ValueTypeOptions = string> extends React.Component<TabsProps<ValueType>> {
    handleChange: (event: React.ChangeEvent<{}>, value: ValueType) => void;
    render(): JSX.Element;
}
export {};
