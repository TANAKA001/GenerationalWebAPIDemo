// InputRange.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputRange, { InputRangeProps } from "./InputRange";

export default {
  title: "Input/Range",
  component: InputRange,
  argTypes: {},
} as ComponentMeta<typeof InputRange>;

const Template: ComponentStory<typeof InputRange> = (args: InputRangeProps) => <InputRange {...args} />;

export const Default = Template.bind({});
Default.args = {};
