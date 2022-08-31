// Accordion.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Accordion, { AccordionProps } from "./Accordion";
import AccordionHead from "./AccordionHead";
import AccordionBody from "./AccordionBody";
import Section from "../Grid/Section";

export default {
  title: "Accordion",
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args: AccordionProps) => (
  <Section>
    <Accordion>
      <AccordionHead>This is the head (click me to open)</AccordionHead>
      <AccordionBody>This is the body</AccordionBody>
    </Accordion>
  </Section>
);

export const Default = Template.bind({});
Default.args = {};
