import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Restaurant Reservation',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'RestaurantReservation Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const RestaurantReservation: Story =  {
    args: {
        name: 'Restaurant Reservation',
        preset: 'restaurantReservation',
        onChange: undefined
    },
}