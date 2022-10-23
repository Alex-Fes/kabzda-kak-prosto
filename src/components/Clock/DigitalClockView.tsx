import React from "react";
import {ClockViewPropsType, getDoubleDigitString} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{getDoubleDigitString(date.getHours())}</span>
        :
        <span>{getDoubleDigitString(date.getMinutes())}</span>
        :
        <span>{getDoubleDigitString(date.getSeconds())}</span>
    </>
}