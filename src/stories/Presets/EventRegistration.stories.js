import { userEvent, within } from "@storybook/testing-library";
import { Form } from "../../components/Form";

export default {
    title: 'Presets/Event Registration',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'Event Registration Data:'
        }
    }
}

export const EventRegistration =  {
    args: {
        name: 'Event Registration',
        preset: 'eventRegistration'
    },
}