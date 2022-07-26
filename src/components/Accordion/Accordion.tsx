import React from "react";
type CollapsedAccordionType = true | false;

type AccordionPropsType = {
    titleValue: string
    collapsed: CollapsedAccordionType
    onClick: () => void
    items: ItemType[]
    onChange: (value: any) => void
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
type ItemType = {
    title: string
    value: any
}
type AcordionBodyPropsType = {
    items: ItemType[]
    onChange: (value: any) => void
}
export const Accordion = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
        {!props.collapsed && <AccordionBody items={props.items} onChange={props.onChange}/>}
    </div>
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={(e) => {
        props.onClick()
    }}>{props.title}</h3>
}

function AccordionBody(props: AcordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li key={index} onClick={() => {
                props.onChange(i.value)
            }}>{i.title}</li>)}
        </ul>
    )
}









