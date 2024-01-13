import { userEvent, within } from "@storybook/testing-library";
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
    },
    play: async ( { canvasElement}) => {
        const canvas = within(canvasElement);

        const ageInput = canvas.getByLabelText('Age', { selector: 'input'});

        await userEvent.type(ageInput, '23', {
            delay: 100
        })
    }
}