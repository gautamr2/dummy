import React from 'react';
import { AlertProps } from '../Alert';
export interface AlertItem {
    props: AlertProps;
}
export declare const useAlerts: () => {
    alerts: readonly AlertItem[];
    addAlert: (alert: AlertItem) => void;
    addAlerts: (newAlerts: readonly AlertItem[]) => void;
    removeAlert: (alert: AlertItem) => void;
    clearAlerts: () => void;
    setAlerts: React.Dispatch<React.SetStateAction<readonly AlertItem[]>>;
};
interface AlertRendererProps {
    alerts: ReadonlyArray<AlertItem>;
    removeAlert(alert: AlertItem): void;
}
export declare const AlertRenderer: React.SFC<AlertRendererProps>;
export {};
