// Tabbar.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Tabbar, { TabbarProps } from "./Tabbar";

export default {
  title: "Tabbar",
  component: Tabbar,
  argTypes: {},
} as ComponentMeta<typeof Tabbar>;

const Template: ComponentStory<typeof Tabbar> = (args: TabbarProps) => <Tabbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
