import { ReactNode, SFC } from 'react';
import { GetHandleProps, GetTrackProps, SliderItem } from 'react-compound-slider';
interface SliderHandleProps {
    domain: ReadonlyArray<number>;
    getHandleProps: GetHandleProps;
    handle: SliderItem;
}
export declare const SliderHandle: SFC<SliderHandleProps>;
interface SliderTrackProps {
    source: SliderItem;
    target: SliderItem;
    getTrackProps: GetTrackProps;
    id: number;
}
export declare const SliderTrack: SFC<SliderTrackProps>;
interface SliderTickProps {
    key: string;
    tick: SliderItem;
    count: number;
    formatValue(value: number): ReactNode;
}
export declare const SliderTick: SFC<SliderTickProps>;
export {};
