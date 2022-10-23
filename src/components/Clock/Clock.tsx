import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "../AnalogClock/AnalogClockView";


type PropsType = {
    mode?: 'digital' | 'analog'
}
export type ClockViewPropsType = {
    date: Date
}
export const getDoubleDigitString = (num: number) => num < 10 ? '0' + num : num;

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])


    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }
    return <div>
        {view}
    </div>
}



// export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
//     return <span>ANALOG</span>
// }





















