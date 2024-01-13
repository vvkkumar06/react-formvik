import { Meta, StoryObj} from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Fields/Select',
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

export const Select: Story = {
    args: {
        config: {
            fields: [
                {
                    label: 'Language',
                    field: 'lang',
                    inputProps: {
                        type: 'dropdown',
                        options: [{ label: 'Select One', field: '' }, { label: 'Hindi', value: 'Hindi' }, { label: 'English', value: 'English' }],
                        selected: ''
                    },
                    css: {
                        inputClass: 'form-select',
                        labelClass: 'form-label'
                    }
                },
            ]
        }
    }
}
