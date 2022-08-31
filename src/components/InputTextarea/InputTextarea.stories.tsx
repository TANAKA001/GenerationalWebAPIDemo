// InputTextarea.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputTextarea, { InputTextareaProps } from "./InputTextarea";

export default {
  title: "Input/Textarea",
  component: InputTextarea,
  argTypes: {},
} as ComponentMeta<typeof InputTextarea>;

const Template: ComponentStory<typeof InputTextarea> = (args: InputTextareaProps) => <InputTextarea {...args} />;

export const Default = Template.bind({});
Default.args = {};
