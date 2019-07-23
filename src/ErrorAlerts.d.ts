import React from 'react';
export interface ErrorAlertsProps {
    genericMessage: string;
    error?: Error;
    maxErrors?: number;
}
export declare const ErrorAlerts: React.FunctionComponent<ErrorAlertsProps>;
