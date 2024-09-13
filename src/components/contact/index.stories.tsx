
import type { Meta, StoryObj } from '@storybook/react';
 
import Contact from './index';
 
const meta: Meta<typeof Contact> = {
  component: Contact,
};
export default meta;
 
type Story = StoryObj<typeof Contact>;
 
export const Basic: Story = {
  args: {
    icon: "fa-solid fa-phone",
    label: "+44 (0) 7707603258"
  }
};