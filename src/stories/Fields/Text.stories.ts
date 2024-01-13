import { Meta, StoryObj} from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Fields/Text',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
    }
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>


export const Text: Story = {
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
    }
}
