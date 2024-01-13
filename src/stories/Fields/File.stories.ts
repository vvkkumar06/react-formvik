import { Meta, StoryObj} from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Fields/File',
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


export const File: Story = {
    args: {
        config: {
            fields: [
                {
                    label: 'Upload',
                    field: 'resume',
                    inputProps: {
                        type: 'file',
                        multiple: true
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

