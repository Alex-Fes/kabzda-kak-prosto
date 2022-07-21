import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true);

    return (<div>
        <AccordionTitle title={props.titleValue} onClick={() => {
            setCollapsed(!collapsed)
        }}/>
        {/*<button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>*/}
        {!collapsed && <AccordionBody/>}
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