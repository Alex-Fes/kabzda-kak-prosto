import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import UncotrolledRaiting from "./UncontrolledRaiting";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncotrolledRaiting',
    component: UncotrolledRaiting,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof UncotrolledRaiting>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const callback = action('raiting changed inside component')

export const RaitingEmpty: ComponentStory<typeof UncotrolledRaiting> = () => <UncotrolledRaiting defaultValue={0}
                                                                                                 onChange={callback}/>;
export const Raiting1: ComponentStory<typeof UncotrolledRaiting> = () => <UncotrolledRaiting defaultValue={1}
                                                                                             onChange={callback}/>;
export const Raiting2: ComponentStory<typeof UncotrolledRaiting> = () => <UncotrolledRaiting defaultValue={2}
                                                                                             onChange={callback}/>;
export const Raiting3: ComponentStory<typeof UncotrolledRaiting> = () => <UncotrolledRaiting defaultValue={3}
                                                                                             onChange={callback}/>;
export const Raiting4: ComponentStory<typeof UncotrolledRaiting> = () => <UncotrolledRaiting defaultValue={4}
                                                                                             onChange={callback}/>;
export const Raiting5: ComponentStory<typeof UncotrolledRaiting> = () => <UncotrolledRaiting defaultValue={5}
                                                                                             onChange={callback}/>;