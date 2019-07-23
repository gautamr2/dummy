import React from 'react';
export interface RadioGroupOption<ValueType extends string> {
    label: string;
    value: ValueType;
    disabled?: boolean;
}
export interface RadioGroupProps<ValueType extends string> {
    value: ValueType;
    groupLabel?: string;
    options: ReadonlyArray<RadioGroupOption<ValueType>>;
    row?: boolean;
    onChange?(value: ValueType): void;
}
export declare class RadioGroup<ValueType extends string> extends React.Component<RadioGroupProps<ValueType>> {
    handleChange: (event: React.ChangeEvent<{}>, value: string) => void;
    render(): JSX.Element;
}
