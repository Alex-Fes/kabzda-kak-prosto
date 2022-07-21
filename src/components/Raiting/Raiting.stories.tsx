import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Raiting, {RaitingValueType} from "./Raiting";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Raiting',
    component: Raiting,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Raiting>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const RaitingEmpty: ComponentStory<typeof Raiting> = () => <Raiting value={0} onClick={x=>x}/>;
export const Raiting1: ComponentStory<typeof Raiting> = () => <Raiting value={1} onClick={x=>x}/>;
export const Raiting2: ComponentStory<typeof Raiting> = () => <Raiting value={2} onClick={x=>x}/>;
export const Raiting3: ComponentStory<typeof Raiting> = () => <Raiting value={3} onClick={x=>x}/>;
export const Raiting4: ComponentStory<typeof Raiting> = () => <Raiting value={4} onClick={x=>x}/>;
export const Raiting5: ComponentStory<typeof Raiting> = () => <Raiting value={5} onClick={x=>x}/>;



export const RaitingChanging: ComponentStory<typeof Raiting> = () => {
    const [raiting, setRaiting] = useState<RaitingValueType>(1);
    return <Raiting value={raiting} onClick={setRaiting}/>
}
