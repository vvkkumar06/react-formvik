import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Server Maintenance Request',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'ServerMaintenanceRequest Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const ServerMaintenanceRequest: Story =  {
    args: {
        name: 'Server Maintenance Request',
        preset: 'serverMaintenanceRequest',
        onChange: undefined
    },
}