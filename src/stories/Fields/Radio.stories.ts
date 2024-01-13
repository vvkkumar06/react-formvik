import { Meta, StoryObj} from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Fields/Radio',
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



export const Radio: Story = {
    args: {
        config: {
            fields: [
                {
                    label: 'Gender',
                    field: 'gender',
                    inputProps: {
                        type: 'radio',
                        options: [
                            {
                                label: 'Male', value: 'male',
                            },
                            {
                                label: 'Female', value: 'female'
                            }
                        ]
                    },
                }
            ],
            css: {
                radioLabelClass: 'form-check-label',
                inputClass: 'form-check-input',
                radioContainerClass: 'form-check mt-4',
                radioGroupClass: 'd-flex gap-4'
            }
        }
    }
}


