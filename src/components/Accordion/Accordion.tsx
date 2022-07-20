import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: CollapsedAccordionType
    onClick: (value:CollapsedAccordionType) => void
}
type AccordionTitlePropsType = {
    title: string
    onClick: (value:CollapsedAccordionType) => void
    collapsed:CollapsedAccordionType
}
type CollapsedAccordionType = true | false;

export const Accordion = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={() => {
        props.onClick(!props.collapsed)
    }}>{props.title}</h3>
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









