// InputFootnote.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputFootnote, { InputFootnoteProps } from "./InputFootnote";

export default {
  title: "Input/Footnote",
  component: InputFootnote,
  argTypes: {},
} as ComponentMeta<typeof InputFootnote>;

const Template: ComponentStory<typeof InputFootnote> = (args: InputFootnoteProps) => <InputFootnote {...args} />;

export const Default = Template.bind({});
Default.args = {};
