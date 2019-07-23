import React from 'react';
import { AlertProps } from './Alert';
interface AlertItem {
    props: AlertProps;
}
export interface AlertContextValue {
    alerts: ReadonlyArray<AlertItem>;
    addAlerts(...alerts: AlertItem[]): void;
    removeAlert(alert: AlertItem): void;
    clearAlerts(): void;
}
interface AlertProviderProps {
    children: React.ReactNode;
}
export declare const createAlertContext: () => {
    AlertConsumer: React.ExoticComponent<React.ConsumerProps<AlertContextValue>>;
    AlertProvider: {
        new (props: AlertProviderProps): {
            addAlerts: (...alerts: AlertItem[]) => void;
            removeAlert: (alert: AlertItem) => void;
            clearAlerts: () => void;
            render(): JSX.Element;
            context: any;
            setState<K extends "alerts" | "addAlerts" | "removeAlert" | "clearAlerts">(state: AlertContextValue | ((prevState: Readonly<AlertContextValue>, props: Readonly<AlertProviderProps>) => AlertContextValue | Pick<AlertContextValue, K>) | Pick<AlertContextValue, K>, callback?: () => void): void;
            forceUpdate(callBack?: () => void): void;
            readonly props: Readonly<AlertProviderProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<AlertContextValue>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<AlertProviderProps>, nextState: Readonly<AlertContextValue>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<AlertProviderProps>, prevState: Readonly<AlertContextValue>): any;
            componentDidUpdate?(prevProps: Readonly<AlertProviderProps>, prevState: Readonly<AlertContextValue>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<AlertProviderProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<AlertProviderProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<AlertProviderProps>, nextState: Readonly<AlertContextValue>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<AlertProviderProps>, nextState: Readonly<AlertContextValue>, nextContext: any): void;
        };
        contextType?: React.Context<any>;
    };
    context: React.Context<AlertContextValue>;
    AlertBox: React.FunctionComponent<{}>;
};
export declare const AlertContext: {
    AlertConsumer: React.ExoticComponent<React.ConsumerProps<AlertContextValue>>;
    AlertProvider: {
        new (props: AlertProviderProps): {
            addAlerts: (...alerts: AlertItem[]) => void;
            removeAlert: (alert: AlertItem) => void;
            clearAlerts: () => void;
            render(): JSX.Element;
            context: any;
            setState<K extends "alerts" | "addAlerts" | "removeAlert" | "clearAlerts">(state: AlertContextValue | ((prevState: Readonly<AlertContextValue>, props: Readonly<AlertProviderProps>) => AlertContextValue | Pick<AlertContextValue, K>) | Pick<AlertContextValue, K>, callback?: () => void): void;
            forceUpdate(callBack?: () => void): void;
            readonly props: Readonly<AlertProviderProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<AlertContextValue>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<AlertProviderProps>, nextState: Readonly<AlertContextValue>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<AlertProviderProps>, prevState: Readonly<AlertContextValue>): any;
            componentDidUpdate?(prevProps: Readonly<AlertProviderProps>, prevState: Readonly<AlertContextValue>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<AlertProviderProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<AlertProviderProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<AlertProviderProps>, nextState: Readonly<AlertContextValue>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<AlertProviderProps>, nextState: Readonly<AlertContextValue>, nextContext: any): void;
        };
        contextType?: React.Context<any>;
    };
    context: React.Context<AlertContextValue>;
    AlertBox: React.FunctionComponent<{}>;
};
export {};
