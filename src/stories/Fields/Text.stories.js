import { userEvent, within } from "@storybook/testing-library";
import { Form } from "../../components/Form";

export default {
    title: 'Fields/Text',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
    }
}

export const Text = {
    args: {
        config: {
            fields: [
                {
                    label: "First Name",
                    field: "firstName",
                    inputProps: {
                        type: "text",
                        required: true
                    },
                    validation: {
                        errorMessage: 'Please provide valid First Name'
                    },
                    css: {
                        labelClass: 'form-label',
                        inputClass: 'form-control',
                        containerClass: 'mt-4'
                    }
                },

            ]
        }
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const nameInput = canvas.getByLabelText('First Name', {
            selector: 'input'
        });

        await userEvent.type(nameInput, 'Vivek Kumar', {
            delay: 100
        })
    }
}
