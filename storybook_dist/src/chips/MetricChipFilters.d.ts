import { FunctionComponent } from 'react';
import { MetricChipProps } from './MetricChip';
declare type MetricChipPassthrough = Exclude<MetricChipProps, 'onDelete' | 'key'>;
interface MetricChipFilter extends MetricChipPassthrough {
    persistent?: boolean;
}
export interface MetricChipFiltersProps {
    filters: ReadonlyArray<MetricChipFilter>;
    onFilterClose?(id?: string): void;
}
export declare const MetricChipFilters: FunctionComponent<MetricChipFiltersProps>;
export {};
