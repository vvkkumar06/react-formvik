import { Meta, StoryObj} from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Fields/Range',
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



export const Range: Story= {
    args: {
        config: {
            fields: [
                {
                    label: 'Volume',
                    field: 'vol',
                    defaultValue: 40,
                    inputProps: {
                        type: 'range',
                        min: 20,
                        max: 80,
                        step: 10
                    }, css: {
                        labelClass: 'form-label m-2',
                        containerClass: 'mt-4 d-flex align-items-center'
                    }
                }

            ]
        }
    }
}

