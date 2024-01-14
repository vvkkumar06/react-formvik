import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Credit Card Payment',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'CreditCardPayment Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const CreditCardPayment: Story =  {
    args: {
        name: 'Credit Card Payment',
        preset: 'creditCardPayment',
        onChange: undefined
    },
}