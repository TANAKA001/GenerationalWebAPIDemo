// Icon.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Icon, { IconProps } from "./Icon";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args: IconProps) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {};
