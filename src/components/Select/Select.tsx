import React, {useState} from "react";
import style from './Select.module.css'

export type SelectPropsType = {
    value: any
    onClick: (value: any) => void
    items: ItemType[]
}

type ItemType = {
    title: string
    value: any
}
type SelectBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
    value: any
}

export function Select(props: SelectPropsType) {
    let [collapsed, setCollapsed] = useState(false);
    const onClickTitle = (value: any) => {
        // setCollapsed(!collapsed)
        props.onClick(value);
        setCollapsed(!collapsed)// закрывает меню после клика на title в всплывающем окне
    };
    let selectTitle = props.items.find(i => i.value === props.value);// поиск объекта по значению для тайтла

    return (
        <div>
            {/*<select>*/}
            {/*    <option value='1'>Alex</option>*/}
            {/*    <option value='2'>Vika</option>*/}
            {/*    <option value='3'>Yana</option>*/}
            {/*    <option value='4'>Natasha</option>*/}
            {/*</select>*/}
            <div className={style.select}>
                <h3 onClick={onClickTitle}>{selectTitle && selectTitle.title}</h3>
                <div className={style.items}>{collapsed &&
                    <SelectBody
                        items={props.items}
                        onClick={onClickTitle}
                        value={props.value}
                    />}</div>
            </div>
        </div>
    )
}

export function SelectBody(props: SelectBodyPropsType) {
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value); //стейт для выбранного элемента для подсветки
    let hoveredItem = props.items.find(i => i.value === hoveredElementValue);//ищем значение для подсветки
    return <>{props.items.map((i) =>
        <div
            onMouseEnter={()=>{setHoveredElementValue(i.value)}}
            className={style.item + ' ' + (hoveredItem === i ? style.selected : '')}//подсвечиваем элемент
            key={i.value}
             onClick={() => {
                 props.onClick(i.value)
             }}
        >{i.title}</div>
    )}
    </>
}


