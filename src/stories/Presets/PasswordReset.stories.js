import { userEvent, within } from "@storybook/testing-library";
import { Form } from "../../components/Form";

export default {
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
}

export const PasswordReset =  {
    args: {
        name: 'Password Reset',
        preset: 'passwordReset'
    },
}