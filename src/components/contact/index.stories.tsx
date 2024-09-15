
import type { Meta, StoryObj } from '@storybook/react';
 
import Contact, { CONTACT } from './index';
 
const meta: Meta<typeof Contact> = {
  component: Contact,
};
export default meta;
 
type Story = StoryObj<typeof Contact>;
 
export const Basic: Story = {
  args: {
    type: CONTACT.Phone,
    label: "+44 (0) 123456789"
  }
};