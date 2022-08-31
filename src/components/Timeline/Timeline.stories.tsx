// Timeline.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Timeline, { TimelineProps } from "./Timeline";
import Section from "../Grid/Section";

export default {
  title: "Timeline",
  component: Timeline,
  argTypes: {},
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args: TimelineProps) => (
  <Section>
    <Timeline {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {};
