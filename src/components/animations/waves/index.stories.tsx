
import type { Meta, StoryObj } from '@storybook/react';

import Wave from '.';

const meta: Meta<typeof Wave> = {
    component: Wave,
};
export default meta;

type Story = StoryObj<typeof Wave>;

export const Basic: Story = {
    args: {
        dividers: true,
        children: [
            <Wave key={"wave"} />,
        ]
    },
};