// Chip.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Chip, { ChipProps } from "./Chip";
import Section from "../Grid/Section";

export default {
  title: "Chip",
  component: Chip,
  argTypes: {},
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args: ChipProps) => (
  <Section>
    <Chip {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {
  label: "chip",
  dismissible: true,
};
