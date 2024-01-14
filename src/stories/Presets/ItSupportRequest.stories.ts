import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/It Support Request',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'ItSupportRequest Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const ItSupportRequest: Story =  {
    args: {
        name: 'It Support Request',
        preset: 'itSupportRequest',
        onChange: undefined
    },
}