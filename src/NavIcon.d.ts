import React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
declare type ConvertedNavIconName = 'cog' | 'cloud' | 'server' | 'th' | 'lightbulb' | 'chart-bar' | 'briefcase-medical' | 'users' | 'bolt' | 'user-friends' | 'bullseye' | 'bell' | 'user-circle' | 'question-circle';
declare type ClassicNavIconName = 'mdi-settings' | 'mdi-cloud' | 'mdi-dns' | 'mdi-view-quilt' | 'mdi-lightbulb-outline' | 'mdi-chart-bar' | 'mdi-medical-bag' | 'mdi-account-multiple' | 'mdi-flash' | 'user-friends' | 'bullseye' | 'bell' | 'user-circle' | 'question-circle';
export declare type NavIconName = ConvertedNavIconName | ClassicNavIconName;
export interface NavIconProps extends SvgIconProps {
    icon: NavIconName;
}
export declare const NavIcon: React.FunctionComponent<NavIconProps>;
export {};
