import { userEvent, within } from "@storybook/testing-library";
import { Form } from "../../components/Form";

export default {
    title: 'Presets/Survey',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'Survey Data:'
        }
    }
}

export const Survey =  {
    args: {
        name: 'Survey',
        preset: 'survey'
    },
}