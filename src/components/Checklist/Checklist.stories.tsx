// Checklist.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Checklist, { ChecklistProps } from "./Checklist";
import Section from "../Grid/Section";

export default {
  title: "Checklist",
  component: Checklist,
  argTypes: {},
} as ComponentMeta<typeof Checklist>;

const Template: ComponentStory<typeof Checklist> = (args: ChecklistProps) => (
  <Section>
    <Checklist {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "item 1", checked: true },
    { label: "item 2", checked: true },
    { label: "item 3", checked: false },
  ],
};
