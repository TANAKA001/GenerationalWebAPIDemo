// Breadcrumbs.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Breadcrumbs, { BreadcrumbsProps } from "./Breadcrumbs";
import Section from "../Grid/Section";

export default {
  title: "Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {},
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args: BreadcrumbsProps) => (
  <Section>
    <Breadcrumbs {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {
  // crumbs: [
  //   { name: "Home", url: "/" },
  //   { name: "Page", url: "/" },
  //   { name: "Sub-page", url: "/" },
  // ],
};
