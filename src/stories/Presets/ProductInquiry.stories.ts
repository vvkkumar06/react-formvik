import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Product Inquiry',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'ProductInquiry Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductInquiry: Story =  {
    args: {
        name: 'Product Inquiry',
        preset: 'productInquiry',
        onChange: undefined
    },
}