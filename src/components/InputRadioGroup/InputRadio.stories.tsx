// InputRadio.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputRadio, { InputRadioProps } from "./InputRadio";

export default {
  title: "Input/Radio",
  component: InputRadio,
  argTypes: {},
} as ComponentMeta<typeof InputRadio>;

const Template: ComponentStory<typeof InputRadio> = (args: InputRadioProps) => <InputRadio {...args} />;

export const Default = Template.bind({});
Default.args = {};
