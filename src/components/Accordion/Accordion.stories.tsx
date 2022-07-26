import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Accordion} from './Accordion'
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const callback = action('accordion mode change event');

export const MenuCollapsed: ComponentStory<typeof Accordion> = () => <Accordion
    titleValue={'Title'}
    collapsed={false}
    onClick={callback}
    onChange={(value: any)=> {alert(value)}}
    items={[]}
/>;
export const MenuUnCollapsed: ComponentStory<typeof Accordion> = () => <Accordion
    titleValue={'User'}
    collapsed={true}
    onClick={callback}
    onChange={(value: any)=> {alert(value)}}
    items={[{title: 'Alex', value: 1},
        {title: 'Vika', value: 2},
        {title: 'Yana', value: 3},
        {title: 'Natasha', value: 4}]}/>;

export const ModeChanging: ComponentStory<typeof Accordion> = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'User'}
                      collapsed={value}
                      onClick={() => {
                          setValue(!value)
                      }}
                      items={[{title: 'Alex', value: 1},
                          {title: 'Vika', value: 2},
                          {title: 'Yana', value: 3},
                          {title: 'Natasha', value: 4}]}
                      onChange={(value: any)=> {alert(value)}}/>
};

