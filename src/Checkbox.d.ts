import React, { ChangeEvent } from 'react';
interface CheckboxProps {
    checked: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    className?: string;
    label: string;
    onChange(checked: boolean, event: ChangeEvent<HTMLInputElement>): void;
}
export declare class Checkbox extends React.Component<CheckboxProps> {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
