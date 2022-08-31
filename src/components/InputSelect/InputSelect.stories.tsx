// InputSelect.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputSelect, { InputSelectProps } from "./InputSelect";

export default {
  title: "Input/Select",
  component: InputSelect,
  argTypes: {},
} as ComponentMeta<typeof InputSelect>;

const Template: ComponentStory<typeof InputSelect> = (args: InputSelectProps) => <InputSelect {...args} />;

export const Default = Template.bind({});
Default.args = {};
