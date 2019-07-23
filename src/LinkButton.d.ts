import { FunctionComponent } from 'react';
import { LinkProps } from '@material-ui/core/Link';
export interface LinkButtonProps {
    onClick: LinkProps['onClick'];
}
export declare const LinkButton: FunctionComponent<LinkButtonProps>;
