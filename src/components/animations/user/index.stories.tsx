
import type { Meta, StoryObj } from '@storybook/react';

import User from '.';

const meta: Meta<typeof User> = {
    component: User,
};
export default meta;

type Story = StoryObj<typeof User>;

export const Basic: Story = {
    args: {
        dividers: true,
        children: [
            <User key={"user"} />,
        ]
    },
};