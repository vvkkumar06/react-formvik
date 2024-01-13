import { userEvent, within } from "@storybook/testing-library";
import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Login',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: "Login Data: "
        }
    }
} satisfies Meta<typeof Form>
export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {
    args: {
        preset: 'login',
        onChange: undefined
    },
    play: async ({ canvasElement }) => {
        const c = within(canvasElement);

        const usernameInput = c.getByLabelText('Username', { selector: 'input ' });
        const passwordInput = c.getByLabelText('Password', { selector: 'input' });
        const loginBtn = c.getByRole('button');


        await userEvent.type(usernameInput, 'johndoe1985', { delay: 100 });

        await userEvent.type(passwordInput, 'Rainbow42$', { delay: 100 });

        await userEvent.click(loginBtn);
    }
}