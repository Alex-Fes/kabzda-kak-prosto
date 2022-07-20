import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import UncontrolledOnOff from "./UncontrolledOnOff";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof UncontrolledOnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const OnMode: ComponentStory<typeof UncontrolledOnOff> = () => <UncontrolledOnOff />;
