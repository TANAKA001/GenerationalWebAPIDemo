// Badge.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Badge, { BadgeProps } from "./Badge";
import Section from "../Grid/Section";

export default {
  title: "Badge",
  component: Badge,
  argTypes: {},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => (
  <Section>
    <Badge {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {
  theme: "info",
  children: "123",
};
