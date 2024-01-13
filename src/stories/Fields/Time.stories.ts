import { Meta, StoryObj} from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Fields/Time',
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



export const Time: Story = {
    args: {
        config: {
            fields: [
                {
                    label: 'Pickup Time',
                    field: 'pickupTime',
                    inputProps: {
                        type: 'time',
                        min: "09:00",
                        max: "18:00"
                    },
                    validation: {
                        errorMessage: 'Please provide correct time!'
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

