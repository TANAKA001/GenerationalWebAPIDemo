// InputText.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputText, { InputTextProps } from "./InputText";

export default {
  title: "Input/Text",
  component: InputText,
  argTypes: {
    id: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args: InputTextProps) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "component-id",
  label: "Input Label",
  placeholder: "Input",
  type: "text",
};
