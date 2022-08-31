// SparklinePie.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import SparklinePie, { SparklinePieProps } from "./SparklinePie";

export default {
  title: "SparklinePie",
  component: SparklinePie,
  argTypes: {},
} as ComponentMeta<typeof SparklinePie>;

const Template: ComponentStory<typeof SparklinePie> = (args: SparklinePieProps) => <SparklinePie {...args} />;

export const Default = Template.bind({});
Default.args = {};
