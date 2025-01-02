
import type { Meta, StoryObj } from '@storybook/react';

import Tag from './index';

const meta: Meta<typeof Tag> = {
  component: Tag,
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Basic: Story = {
  args: {}
};