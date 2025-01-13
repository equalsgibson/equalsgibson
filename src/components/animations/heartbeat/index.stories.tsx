
import type { Meta, StoryObj } from '@storybook/react';

import Heartbeat from '.';

const meta: Meta<typeof Heartbeat> = {
    component: Heartbeat,
};
export default meta;

type Story = StoryObj<typeof Heartbeat>;

export const Basic: Story = {
    args: {
        dividers: true,
        children: [
            <Heartbeat key={"heartbeat"} />,
        ]
    },
};