import React, {useState} from "react";
import {RaitingValueType} from "./Raiting";


type RaitingPropsType = {
    defaultValue?: RaitingValueType
    onChange: (value: RaitingValueType) => void
}

type StarPropsType = {
    selected: boolean
    // value: 0 | 1 | 2 | 3 | 4 | 5
    setStar: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

function UncotrolledRaiting(props: RaitingPropsType) {
    let [star, setStar] = useState<RaitingValueType>(props.defaultValue ? props.defaultValue : 0);
    return (
        <div>
            <Star selected={star > 0} setStar={() => {
                setStar(1);
                props.onChange(1)
            }}/>
            <Star selected={star > 1} setStar={() => {
                setStar(2);
                props.onChange(2)
            }}/>
            <Star selected={star > 2} setStar={() => {
                setStar(3);
                props.onChange(3)
            }}/>
            <Star selected={star > 3} setStar={() => {
                setStar(4);
                props.onChange(4)
            }}/>
            <Star selected={star > 4} setStar={() => {
                setStar(5);
                props.onChange(5)
            }}/>
            {/*<Star selected={star > 4} setStar={setStar} value={5}/>*/}


            {/*<Star selected={star > 4} setStar={()=>{ setStar(5)}}/>
            можно передать анонимную функцию и в ней вызвать колбек (без value)
            и передать в нем значение для перезаписи стейта.
             но еще нужно пропс почистить от value
            */}
        </div>
    )
}

export function Star(props: StarPropsType) {
    return <span onClick={() => {
        // props.setStar(props.value)
    }}>
        {props.selected ? <b> Star </b> : ' Star'}
    </span>

}

export default UncotrolledRaiting;