import React from 'react';
import {Clock} from "./Clock";

export default {
    title: 'Clock demo',

}


export const DigitalClock = () => {
    return <Clock mode={'digital'}/>
};

export const AnalogClockDemo = () => {
    return <Clock mode={'analog'}/>
};


