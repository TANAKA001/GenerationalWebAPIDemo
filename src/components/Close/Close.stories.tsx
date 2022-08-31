// Close.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Close, { CloseProps } from "./Close";
import Section from "../Grid/Section";

export default {
  title: "Close",
  component: Close,
  argTypes: {},
} as ComponentMeta<typeof Close>;

const Template: ComponentStory<typeof Close> = (args: CloseProps) => (
  <Section>
    <Close {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {
  size: "md",
  theme: "default",
};
