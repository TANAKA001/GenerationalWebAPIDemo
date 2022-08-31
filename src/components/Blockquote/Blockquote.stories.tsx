// Blockquote.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Blockquote, { BlockquoteProps } from "./Blockquote";
import Section from "../Grid/Section";

export default {
  title: "Blockquote",
  component: Blockquote,
  argTypes: {},
} as ComponentMeta<typeof Blockquote>;

const Template: ComponentStory<typeof Blockquote> = (args: BlockquoteProps) => (
  <Section>
    <Blockquote {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {};
