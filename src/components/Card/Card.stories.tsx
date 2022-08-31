// Card.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Card, { CardProps } from "./Card";
import Section from "../Grid/Section";
import CardBody from "./CardBody";

export default {
  title: "Layout/Card",
  component: Card,
  argTypes: {
    id: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => (
  <Section>
    <Card {...args}>
      <CardBody>This is a Card</CardBody>
    </Card>
  </Section>
);

export const Default = Template.bind({});
Default.args = {
  id: "component-id",
};
