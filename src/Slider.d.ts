import { SFC } from 'react';
export interface SliderProps {
    min: number;
    max: number;
    values: ReadonlyArray<number>;
    unit: 'percent' | 'currency';
    sliderType: 'default' | 'elevated';
    onUpdate(values: ReadonlyArray<number>): void;
    onChange?(values: ReadonlyArray<number>): void;
}
export declare const Slider: SFC<SliderProps>;
