// Sidebar.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Sidebar, { SidebarProps } from "./Sidebar";

export default {
  title: "Sidebar",
  component: Sidebar,
  argTypes: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args: SidebarProps) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};
