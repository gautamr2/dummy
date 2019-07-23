import React from 'react';
import { ButtonVariants } from '../Button';
import { BaseModalProps } from './ModalHelpers';
interface ModalProps extends Pick<BaseModalProps, Exclude<keyof BaseModalProps, 'onCancel'>> {
    closeButtonLabel?: string;
    closeButtonVariant?: ButtonVariants;
    onClose: BaseModalProps['onCancel'];
    buttons?({ onClose }: {
        onClose(): void;
    }): React.ReactNode;
}
export declare class NotificationModal extends React.Component<ModalProps> {
    renderButtons: () => JSX.Element;
    render(): JSX.Element;
}
export {};
