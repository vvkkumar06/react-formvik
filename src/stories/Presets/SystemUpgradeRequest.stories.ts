import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/System Upgrade Request',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'SystemUpgradeRequest Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const SystemUpgradeRequest: Story =  {
    args: {
        name: 'System Upgrade Request',
        preset: 'systemUpgradeRequest',
        onChange: undefined
    },
}