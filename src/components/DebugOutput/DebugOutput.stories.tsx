// DebugOutput.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import DebugOutput, { DebugOutputProps } from "./DebugOutput";

export default {
  title: "DebugOutput",
  component: DebugOutput,
  argTypes: {},
} as ComponentMeta<typeof DebugOutput>;

const Template: ComponentStory<typeof DebugOutput> = (args: DebugOutputProps) => <DebugOutput {...args} />;

export const Default = Template.bind({});
Default.args = {};
