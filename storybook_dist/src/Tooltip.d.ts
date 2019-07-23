import React from 'react';
import { TooltipProps as MuiTooltipProps } from '@material-ui/core/Tooltip';
export interface TooltipProps extends Pick<MuiTooltipProps, 'placement'> {
    title: string;
    children: React.ReactElement;
    hideTooltip?: boolean;
}
export declare const Tooltip: React.FunctionComponent<TooltipProps>;
