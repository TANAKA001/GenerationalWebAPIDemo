// Tooltip.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Tooltip, { TooltipProps } from "./Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {},
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {};
