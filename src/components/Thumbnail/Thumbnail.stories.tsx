// Thumbnail.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Thumbnail, { ThumbnailProps } from "./Thumbnail";

export default {
  title: "Thumbnail",
  component: Thumbnail,
  argTypes: {},
} as ComponentMeta<typeof Thumbnail>;

const Template: ComponentStory<typeof Thumbnail> = (args: ThumbnailProps) => <Thumbnail {...args} />;

export const Default = Template.bind({});
Default.args = {};
