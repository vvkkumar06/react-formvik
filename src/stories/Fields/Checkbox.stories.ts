import { Meta, StoryObj} from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Fields/Checkbox',
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


export const Checkbox: Story = {
    args: {
        config: {
            fields: [
                {
                    label: 'Accept terms and condition',
                    field: 'toc',
                    labelPosition: 'end',
                    defaultValue: false,
                    inputProps: {
                        type: 'checkbox',
                    },
                }
            ],
            css: {
                labelClass: 'form-check-label',
                inputClass: 'form-check-input',
                containerClass: 'form-check mt-4'
            }
        }
    }
}

