import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";


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

const callback = action('on or off clicked');

export const OnMode: ComponentStory<typeof OnOff> = () => <OnOff startValue={true} onClick={callback}/>;
export const OffMode: ComponentStory<typeof OnOff> = () => <OnOff startValue={false} onClick={callback}/>;

export const ModeChanging: ComponentStory<typeof OnOff> = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff startValue={value} onClick={setValue}/>
}