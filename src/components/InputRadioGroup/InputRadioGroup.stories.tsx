// InputRadioGroup.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputRadioGroup, { InputRadioGroupProps } from "./InputRadioGroup";

export default {
  title: "Input/RadioGroup",
  component: InputRadioGroup,
  argTypes: {},
} as ComponentMeta<typeof InputRadioGroup>;

const Template: ComponentStory<typeof InputRadioGroup> = (args: InputRadioGroupProps) => <InputRadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {};
