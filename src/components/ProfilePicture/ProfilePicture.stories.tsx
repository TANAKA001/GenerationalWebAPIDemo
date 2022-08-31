// ProfilePicture.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ProfilePicture, { ProfilePictureProps } from "./ProfilePicture";

export default {
  title: "ProfilePicture",
  component: ProfilePicture,
  argTypes: {},
} as ComponentMeta<typeof ProfilePicture>;

const Template: ComponentStory<typeof ProfilePicture> = (args: ProfilePictureProps) => <ProfilePicture {...args} />;

export const Default = Template.bind({});
Default.args = {};
