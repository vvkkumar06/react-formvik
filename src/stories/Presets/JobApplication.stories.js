import { userEvent, within } from "@storybook/testing-library";
import { Form } from "../../components/Form";

export default {
    title: 'Presets/Job Application',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'Job Application Data:'
        }
    }
}

export const JobApplication =  {
    args: {
        name: 'Job Application',
        preset: 'jobApplication'
    },
}