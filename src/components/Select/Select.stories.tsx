import React, {useState} from 'react';
import {ComponentMeta, ComponentStory,} from '@storybook/react';
import {Select} from "./Select";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Select>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args


export const ControlledSelect: ComponentStory<typeof Select> = () => {
    let [selectValue, setSelectValue] = useState<string | undefined>('0');
    let items = [
        {title: 'None', value: '0'},
        {title: 'Alex', value: '1'},
        {title: 'Vika', value: '2'},
        {title: 'Yana', value: '3'},
        {title: 'Natasha', value: '4'}]
    const onSelect = (value: any) => {
        let chooseTitle = items.find(i => i.value === value);
        setSelectValue(chooseTitle ? chooseTitle.value : chooseTitle);
    };
    return <Select
        value={selectValue}
        onClick={onSelect}
        items={items}/>
}

