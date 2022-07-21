import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import UncotrolledRaiting from "./UncontrolledRaiting";


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
export const RaitingChanged: ComponentStory<typeof UncotrolledRaiting> = () => <UncotrolledRaiting />;