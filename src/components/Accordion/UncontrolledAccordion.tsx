import React, {useReducer} from "react";
import {reduser} from "./reduser";


type AccordionPropsType = {
    titleValue: string
    defaultValue?: boolean
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [state, dispatch] = useReducer( reduser, {collapsed: false});
    return (<div>
        <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type:'TOGGLE-COLLAPSED'})}}/>
        {state.collapsed && <AccordionBody/>}
    </div>)
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div><h3 onClick={(e) => {
            props.onClick()
        }}>{props.title}</h3></div>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;