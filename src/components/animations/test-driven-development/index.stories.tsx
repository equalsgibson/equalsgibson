
import type { Meta, StoryObj } from '@storybook/react';

import TestDrivenDevelopment from '.';

const meta: Meta<typeof TestDrivenDevelopment> = {
    component: TestDrivenDevelopment,
};
export default meta;

type Story = StoryObj<typeof TestDrivenDevelopment>;

export const Basic: Story = {
    args: {
        dividers: true,
        children: [
            <TestDrivenDevelopment key={"wave"} />,
        ]
    },
};