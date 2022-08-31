// Navbar.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Navbar, { NavbarProps } from "./Navbar";
import Section from "../Grid/Section";

export default {
  title: "Navbar",
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args: NavbarProps) => (
  <Section>
    <Navbar {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {};
