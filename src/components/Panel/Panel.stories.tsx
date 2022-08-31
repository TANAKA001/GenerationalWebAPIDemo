// Panel.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Panel, { PanelProps } from "./Panel";

export default {
  title: "Layout/Panel",
  component: Panel,
  argTypes: {},
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args: PanelProps) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {};
