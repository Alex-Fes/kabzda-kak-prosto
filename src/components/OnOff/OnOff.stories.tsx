import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import OnOff from "./OnOff";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff',
    component: OnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof OnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const OnMode: ComponentStory<typeof OnOff> = () => <OnOff />;
