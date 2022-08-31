// Dialogue.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Dialogue, { DialogueProps } from "./Dialogue";
import Section from "../Grid/Section";

export default {
  title: "Dialogue",
  component: Dialogue,
  argTypes: {},
} as ComponentMeta<typeof Dialogue>;

const Template: ComponentStory<typeof Dialogue> = (args: DialogueProps) => (
  <Section>
    <Dialogue {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {};
