// InputToggle.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputToggle, { InputToggleProps } from "./InputToggle";

export default {
  title: "Input/Toggle",
  component: InputToggle,
  argTypes: {},
} as ComponentMeta<typeof InputToggle>;

const Template: ComponentStory<typeof InputToggle> = (args: InputToggleProps) => <InputToggle {...args} />;

export const Default = Template.bind({});
Default.args = {};
