import { userEvent, within } from "@storybook/testing-library";
import { Form } from "../../components/Form";

export default {
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
}

export const Login = {
    args: {
        preset: 'login'
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