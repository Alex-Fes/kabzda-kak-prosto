import React, {useState} from "react";


type RaitingPropsType = {

}

type StarPropsType = {
    selected: boolean
    value: 0 | 1 | 2 | 3 | 4 | 5
    setStar: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

function UncotrolledRaiting(props: RaitingPropsType) {
    let [star, setStar] = useState(0);
    return (
        <div>
            <Star selected={star > 0} setStar={setStar} value={1}/>
            <Star selected={star > 1} setStar={setStar} value={2}/>
            <Star selected={star > 2} setStar={setStar} value={3}/>
            <Star selected={star > 3} setStar={setStar} value={4}/>
            <Star selected={star > 4} setStar={setStar} value={5}/>
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
        props.setStar(props.value)
    }}>
        {props.selected ? <b> Star </b> : 'Star'}
    </span>

}

export default UncotrolledRaiting;