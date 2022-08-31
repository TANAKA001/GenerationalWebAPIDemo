// InputFile.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputFile, { InputFileProps } from "./InputFile";
import Section from "../Grid/Section";

export default {
  title: "InputFile",
  component: InputFile,
  argTypes: {},
} as ComponentMeta<typeof InputFile>;

const Template: ComponentStory<typeof InputFile> = (args: InputFileProps) => (
  <Section>
    <InputFile {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {};
