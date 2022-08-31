// Button.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button, { ButtonProps } from "./Button";
import Section from "../Grid/Section";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Section>
    <Button {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {
  children: "Button Label",
  theme: "primary",
  type: "button",
  size: "md",
  width: "standard",
};
