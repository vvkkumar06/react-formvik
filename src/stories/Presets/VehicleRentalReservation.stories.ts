import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Vehicle Rental Reservation',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'VehicleRentalReservation Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const VehicleRentalReservation: Story =  {
    args: {
        name: 'VehicleRentalReservation',
        preset: 'vehicleRentalReservation',
        onChange: undefined
    },
}