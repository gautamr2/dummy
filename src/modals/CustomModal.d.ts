import React from 'react';
import { BaseModalProps } from './ModalHelpers';
export interface CustomModalProps<ResultType> extends BaseModalProps {
    buttons({ onConfirm, onCancel, }: {
        onConfirm(value: ResultType): void;
        onCancel?(): void;
    }): React.ReactNode;
    onConfirm(value: ResultType): void;
}
export declare class CustomModal<ResultType> extends React.Component<CustomModalProps<ResultType>> {
    renderButtons: () => JSX.Element;
    render(): JSX.Element;
}
