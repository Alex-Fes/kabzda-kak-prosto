import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import UncontrolledAccordion from "./UncontrolledAccordion";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof UncontrolledAccordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const UncontrolledModeChanging: ComponentStory<typeof UncontrolledAccordion> = () => <UncontrolledAccordion
    titleValue={'User'}/>;

