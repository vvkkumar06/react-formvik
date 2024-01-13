import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Password Reset',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'Password Reset Data:'
        }
    }
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>

export const PasswordReset: Story =  {
    args: {
        name: 'Password Reset',
        preset: 'passwordReset'
    },
}