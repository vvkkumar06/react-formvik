import { Meta, StoryObj} from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Fields/Number',
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


export const Number: Story = {
    args: {
        config: {
            fields: [
                {
                    label: "Age",
                    field: "age",
                    inputProps: {
                        type: "number",
                        required: true
                    },
                    css: {
                        labelClass: 'form-label',
                        inputClass: 'form-control',
                        containerClass: 'mt-4'
                    }
                }
            ]
        }
    }
}