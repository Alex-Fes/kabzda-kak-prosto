import React from "react";
import s from './AnalogClock.module.css'


type AnalogClockPropsType = {

}
export const AnalogClock: React.FC<AnalogClockPropsType> = (props:AnalogClockPropsType) => {



    return <article className="clock">
        <div className="hours-container">
            <div className="hours"></div>
        </div>
        <div className="minutes-container">
            <div className="minutes"></div>
        </div>
        <div className="seconds-container">
            <div className="seconds"></div>
        </div>
    </article>
}









