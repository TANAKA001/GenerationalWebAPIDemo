// AlphaJump.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import AlphaJump, { AlphaJumpProps } from "./AlphaJump";
import Section from "../Grid/Section";

export default {
  title: "AlphaJump",
  component: AlphaJump,
  argTypes: {},
} as ComponentMeta<typeof AlphaJump>;

const Template: ComponentStory<typeof AlphaJump> = (args: AlphaJumpProps) => (
  <Section>
    <AlphaJump {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {};
