
import type { Meta, StoryObj } from '@storybook/react';

import Header from '.';
import HEADERLEVEL from '.';

const meta: Meta<typeof Header> = {
  component: Header,
};
export default meta;
 
type Story = StoryObj<typeof Header>;
 
export const Basic: Story = {
 args: {
  children: [
    <h1 key={1}>Header h1</h1>,
    <h2 key={2}>Header h2</h2>,
    <h3 key={3}>Header h3</h3>,
    <h4 key={4}>Header h4</h4>
  ]
 },
};