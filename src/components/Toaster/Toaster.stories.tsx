// Toaster.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Toaster, { ToasterProps } from "./Toaster";

export default {
  title: "Modals/Toaster",
  component: Toaster,
  argTypes: {},
} as ComponentMeta<typeof Toaster>;

const Template: ComponentStory<typeof Toaster> = (args: ToasterProps) => <Toaster {...args} />;

export const Default = Template.bind({});
Default.args = {};
