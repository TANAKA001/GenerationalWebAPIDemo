// InputInvalidMessage.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputInvalidMessage, { InputInvalidMessageProps } from "./InputInvalidMessage";

export default {
  title: "Input/InvalidMessage",
  component: InputInvalidMessage,
  argTypes: {},
} as ComponentMeta<typeof InputInvalidMessage>;

const Template: ComponentStory<typeof InputInvalidMessage> = (args: InputInvalidMessageProps) => (
  <InputInvalidMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message: "This input is invalid.",
};
