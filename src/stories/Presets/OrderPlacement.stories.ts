import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Order Placement',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'OrderPlacement Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const OrderPlacement: Story =  {
    args: {
        name: 'OrderPlacement',
        preset: 'orderPlacement',
        onChange: undefined
    },
}