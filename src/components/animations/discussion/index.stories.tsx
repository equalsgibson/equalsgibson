
import type { Meta, StoryObj } from '@storybook/react';

import Discussion from '.';

const meta: Meta<typeof Discussion> = {
    component: Discussion,
};
export default meta;

type Story = StoryObj<typeof Discussion>;

export const Basic: Story = {
    args: {
        dividers: true,
        children: [
            <Discussion key={"discussion"} />,
        ]
    },
};