import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Paypal Payment',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'PaypalPayment Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const PaypalPayment: Story =  {
    args: {
        name: 'Paypal Payment',
        preset: 'paypalPayment',
        onChange: undefined
    },
}