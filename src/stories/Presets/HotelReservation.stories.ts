import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Hotel Reservation',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'HotelReservation Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const HotelReservation: Story =  {
    args: {
        name: 'Hotel Reservation',
        preset: 'hotelReservation',
        onChange: undefined
    },
}