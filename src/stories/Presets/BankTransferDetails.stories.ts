import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Bank Transfer Details',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'BankTransferDetails Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const BankTransferDetails: Story =  {
    args: {
        name: 'Bank Transfer Details',
        preset: 'bankTransferDetails',
        onChange: undefined
    },
}