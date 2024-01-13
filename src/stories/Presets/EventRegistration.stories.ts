import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Event Registration',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'Event Registration Data:'
        }
    }
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EventRegistration: Story =  {
    args: {
        name: 'Event Registration',
        preset: 'eventRegistration'
    },
}