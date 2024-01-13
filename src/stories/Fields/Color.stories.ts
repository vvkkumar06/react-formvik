import { Meta, StoryObj} from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Fields/Color',
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



export const Color: Story = {
    args: {
        config: {
            fields: [
                {
                    label: 'Choose Color',
                    field: 'color',
                    inputProps: {
                        type: 'color',
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

