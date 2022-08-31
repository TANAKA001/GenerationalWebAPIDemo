// InputLabel.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputLabel, { InputLabelProps } from "./InputLabel";

export default {
  title: "Input/Label",
  component: InputLabel,
  argTypes: {},
} as ComponentMeta<typeof InputLabel>;

const Template: ComponentStory<typeof InputLabel> = (args: InputLabelProps) => <InputLabel {...args} />;

export const Default = Template.bind({});
Default.args = {};
