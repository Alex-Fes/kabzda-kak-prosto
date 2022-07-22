import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import UncontrolledOnOff from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";


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
const callback = action('on or off clicked');
export const ModeOn: ComponentStory<typeof UncontrolledOnOff> = () => <UncontrolledOnOff onChange={callback}
                                                                                         defaultOn={true}/>
export const ModeOff: ComponentStory<typeof UncontrolledOnOff> = () => <UncontrolledOnOff onChange={callback}
                                                                                          defaultOn={false}/>
