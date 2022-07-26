import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;




// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'input',
  //component: UncontrolledInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const UncontrolledInput = () => <input />;

