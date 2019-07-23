import React from 'react';
import { ButtonVariants } from '../Button';
import { BaseModalProps } from './ModalHelpers';
interface ModalProps extends BaseModalProps {
    confirmButtonLabel?: string;
    confirmButtonVariant?: ButtonVariants;
    buttons?({ onConfirm, onCancel, }: {
        onConfirm(): void;
        onCancel(): void;
    }): React.ReactNode;
    onConfirm(): void;
}
export declare class ConfirmationModal extends React.Component<ModalProps> {
    renderButtons: () => JSX.Element;
    render(): JSX.Element;
}
export {};
