// InputSearch.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputSearch, { InputSearchProps } from "./InputSearch";

export default {
  title: "Input/Search",
  component: InputSearch,
  argTypes: {},
} as ComponentMeta<typeof InputSearch>;

const Template: ComponentStory<typeof InputSearch> = (args: InputSearchProps) => <InputSearch {...args} />;

export const Default = Template.bind({});
Default.args = {};
