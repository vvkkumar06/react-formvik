import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Transportation Feedback',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'TransportationFeedback Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const TransportationFeedback: Story =  {
    args: {
        name: 'Transportation Feedback',
        preset: 'transportationFeedback',
        onChange: undefined
    },
}