import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Hotel Stay Feedback',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'HotelStayFeedback Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const HotelStayFeedback: Story =  {
    args: {
        name: 'Hotel Stay Feedback',
        preset: 'hotelStayFeedback',
        onChange: undefined
    },
}