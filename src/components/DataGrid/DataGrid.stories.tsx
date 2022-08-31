// DataGrid.stories.ts

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import DataGrid, { DataGridProps } from "./DataGrid";
import Section from "../Grid/Section";

export default {
  title: "DataGrid",
  component: DataGrid,
  argTypes: {},
} as ComponentMeta<typeof DataGrid>;

const Template: ComponentStory<typeof DataGrid> = (args: DataGridProps) => (
  <Section>
    <DataGrid {...args} />
  </Section>
);

export const Default = Template.bind({});
Default.args = {};
