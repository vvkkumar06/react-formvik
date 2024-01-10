import { userEvent, within } from "@storybook/testing-library";
import { Form } from "../../components/Form";

export default {
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
}

export const Inquiry =  {
    args: {
        name: 'Inquiry',
        preset: 'inquiry'
    },
}