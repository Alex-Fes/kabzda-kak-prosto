import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Raiting, {RaitingPropsType} from "./Raiting";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Raiting stories',
    component: Raiting,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Raiting>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const RaitingEmpty: ComponentStory<typeof Raiting> = () => <Raiting value={0} />;
export const Raiting1: ComponentStory<typeof Raiting> = () => <Raiting value={1} />;
export const Raiting2: ComponentStory<typeof Raiting> = () => <Raiting value={2} />;
export const Raiting3: ComponentStory<typeof Raiting> = () => <Raiting value={3} />;
export const Raiting4: ComponentStory<typeof Raiting> = () => <Raiting value={4} />;
export const Raiting5: ComponentStory<typeof Raiting> = () => <Raiting value={5} />;


//
// export const RaitingChanging = () => {
//     const [raiting, setRaiting] = useState<RaitingPropsType>(2);
//     return <Raiting value={raiting} />
// }
