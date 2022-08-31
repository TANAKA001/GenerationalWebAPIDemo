// TemplateName.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TemplateName, { TemplateNameProps } from "./TemplateName";
import Section from "../Grid/Section";

export default {
  title: "TemplateName",
  component: TemplateName,
  argTypes: {},
} as ComponentMeta<typeof TemplateName>;

const Template: ComponentStory<typeof TemplateName> = (args: TemplateNameProps) => (
  <Section>
    <TemplateName {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {};
