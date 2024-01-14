import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Driver Application',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'DriverApplication Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const DriverApplication: Story =  {
    args: {
        name: 'Driver Applicationt',
        preset: 'driverApplication',
        onChange: undefined
    },
}