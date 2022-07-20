import React, {MouseEventHandler, useState} from "react";


type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}
type AccordionTitlePropsType = {
    title: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true);


    // let collapsedHandler = () => {
    //    if(collapsed === false) {
    //        return setCollapsed(true)
    //    } else {setCollapsed(false)}
    //         }


    return (<div>
        <AccordionTitle title={props.titleValue}/>
        {/*<button onClick={collapsedHandler}>TOGGLE</button>*/}
        <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>
        {!collapsed && <AccordionBody/>}
    </div>)
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div><h3>{props.title}</h3></div>
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