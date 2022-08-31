// Modal.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Modal, { ModalProps } from "./Modal";
import Section from "../Grid/Section";

export default {
  title: "Modal",
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <Section>
    <Modal {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {};
