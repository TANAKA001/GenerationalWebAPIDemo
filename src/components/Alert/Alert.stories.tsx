// Alert.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Alert, { AlertProps } from "./Alert";
import Section from "../Grid/Section";

export default {
  title: "Alert",
  component: Alert,
  argTypes: {},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args: AlertProps) => (
  <Section>
    <Alert {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {
  theme: "info",
  children: "This is an example Alert!",
  dismissible: true,
};
