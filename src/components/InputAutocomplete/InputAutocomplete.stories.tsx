// InputAutocomplete.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputAutocomplete, { InputAutocompleteProps } from "./InputAutocomplete";

export default {
  title: "Input/Autocomplete",
  component: InputAutocomplete,
  argTypes: {},
} as ComponentMeta<typeof InputAutocomplete>;

const Template: ComponentStory<typeof InputAutocomplete> = (args: InputAutocompleteProps) => (
  <InputAutocomplete {...args} />
);

export const Default = Template.bind({});
Default.args = {};
