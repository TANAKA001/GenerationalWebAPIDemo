// ButtonGroup.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ButtonGroup, { ButtonGroupProps } from "./ButtonGroup";
import Section from "../Grid/Section";

export default {
  title: "ButtonGroup",
  component: ButtonGroup,
  argTypes: {},
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args: ButtonGroupProps) => (
  <Section>
    <ButtonGroup {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {};
