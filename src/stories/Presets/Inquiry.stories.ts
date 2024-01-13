import { userEvent, within } from "@storybook/testing-library";
import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Inquiry',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'Inquiry Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const Inquiry: Story =  {
    args: {
        name: 'Inquiry',
        preset: 'inquiry',
        onChange: undefined
    },
}