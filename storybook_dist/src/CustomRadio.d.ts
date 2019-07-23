import React from 'react';
export declare type CustomRadioOptionRenderer<OptionType, ValueType> = ({ option, selectedValue, onSelect, }: {
    option: OptionType;
    selectedValue?: ValueType;
    onSelect(value: ValueType): void;
}) => React.ReactNode;
export interface CustomRadioProps<OptionType, ValueType> {
    value: ValueType | undefined;
    options: ReadonlyArray<OptionType>;
    column?: boolean;
    optionRenderer: CustomRadioOptionRenderer<OptionType, ValueType>;
    onChange?(value: ValueType, option: OptionType): void;
}
export declare class CustomRadio<OptionType, ValueType = string> extends React.Component<CustomRadioProps<OptionType, ValueType>> {
    onSelect(value: ValueType, option: OptionType): void;
    render(): JSX.Element;
}
