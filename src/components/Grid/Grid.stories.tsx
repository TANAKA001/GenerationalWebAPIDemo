// Grid.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Section, { SectionProps } from "./Section";

export default {
  title: "Layout/Grid",
  component: Section,
  argTypes: {
    id: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args: SectionProps) => <Section {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "component-id",
};
