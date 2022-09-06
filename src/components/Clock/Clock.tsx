import React, {useEffect, useState} from "react";


type PropsType = {}

const getDoubleDigitString = (num: number) => num < 10 ? '0' + num : num;

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return ()=>{
            clearInterval(intervalId)
        }
    }, [])

    // const secondsString = getDoubleDigitString(date.getSeconds()); // добавляет 0 впереди секунд если < 10
    // const minutesString =  getDoubleDigitString(date.getMinutes()); // добавляет 0 впереди минут если < 10
    // const hoursString =  getDoubleDigitString(date.getHours()); // добавляет 0 впереди часов если < 10

    return <div>
        <span>{getDoubleDigitString(date.getHours())}</span>
        :
        <span>{getDoubleDigitString(date.getMinutes())}</span>
        :
        <span>{getDoubleDigitString(date.getSeconds())}</span>
    </div>
}