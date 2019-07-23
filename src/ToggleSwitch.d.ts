import React, { ChangeEvent } from 'react';
export interface ToggleSwitchProps {
    checked: boolean;
    disabled?: boolean;
    label: React.ReactNode;
    variant?: 'row';
    onChange(checked: boolean, event: ChangeEvent<HTMLInputElement>): void;
}
export declare class ToggleSwitch extends React.Component<ToggleSwitchProps> {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
