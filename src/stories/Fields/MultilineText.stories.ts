import { Meta, StoryObj} from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Fields/Multiline Text',
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



export const MultilineText: Story = {
    args: {
        config: {
            fields: [
                {
                    label: "Comment",
                    field: "comment",
                    inputProps: {
                        type: "text",
                        rows: 10,
                        cols: 50
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