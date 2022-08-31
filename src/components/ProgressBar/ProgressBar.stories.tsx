// ProgressBar.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ProgressBar, { ProgressBarProps } from "./ProgressBar";

export default {
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args: ProgressBarProps) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 0,
  label: "",
  showPercent: true,
};
