import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Telecommuting Request',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'TelecommutingRequest Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const TelecommutingRequest: Story =  {
    args: {
        name: 'Telecommuting Request',
        preset: 'accessRequest',
        onChange: undefined
    },
}