
import type { Meta, StoryObj } from '@storybook/react';

import ContactGroup from '.';
import Contact, { CONTACT } from '../contact';

const meta: Meta<typeof ContactGroup> = {
  component: ContactGroup,
};
export default meta;
 
type Story = StoryObj<typeof ContactGroup>;
 
export const Basic: Story = {
 args: {
  dividers: true,
  children: [
    <Contact key={1} label='+44 (0) 123456789' type={CONTACT.Phone} />,
    <Contact key={2} label='https://github.com/equalsgibson' type={CONTACT.Web} />,
  ]
 },
};