// InputCheckbox.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputCheckbox, { InputCheckboxProps } from "./InputCheckbox";

export default {
  title: "Input/Checkbox",
  component: InputCheckbox,
  argTypes: {
    theme: {
      control: {
        type: "text",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof InputCheckbox>;

const Template: ComponentStory<typeof InputCheckbox> = (args: InputCheckboxProps) => <InputCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "checkbox-id",
  label: "Sample Label",
};
