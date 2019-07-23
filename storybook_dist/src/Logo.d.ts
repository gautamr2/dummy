import { Component } from 'react';
interface LogoProps {
    logoUrl?: string;
}
interface LogoState {
    loadFailed: boolean;
}
export declare class Logo extends Component<LogoProps, LogoState> {
    readonly state: {
        loadFailed: boolean;
    };
    readonly onImageLoadError: () => void;
    readonly logoHtml: () => JSX.Element;
    readonly render: () => JSX.Element;
}
export {};
