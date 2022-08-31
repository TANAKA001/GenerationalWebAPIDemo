// Paginator.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Paginator, { PaginatorProps } from "./Paginator";

export default {
  title: "Paginator",
  component: Paginator,
  argTypes: {},
} as ComponentMeta<typeof Paginator>;

const Template: ComponentStory<typeof Paginator> = (args: PaginatorProps) => <Paginator {...args} />;

export const Default = Template.bind({});
Default.args = {
  itemCount: 1856,
  perPage: 50,
  currentPage: 1,
  showFirstLast: true,
  showNextPrevious: true,
};
