// Spinner.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Spinner, { SpinnerProps } from "./Spinner";

export default {
  title: "Spinner",
  component: Spinner,
  argTypes: {},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args: SpinnerProps) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {};
