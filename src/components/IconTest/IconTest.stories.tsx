// IconTest.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import IconTest, { IconTestProps } from "./IconTest";

export default {
  title: "IconTest",
  component: IconTest,
  argTypes: {},
} as ComponentMeta<typeof IconTest>;

const Template: ComponentStory<typeof IconTest> = (args: IconTestProps) => <IconTest {...args} />;

export const Default = Template.bind({});
Default.args = {};
