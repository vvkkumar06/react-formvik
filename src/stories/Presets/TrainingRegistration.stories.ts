import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Training Registration',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'TrainingRegistration Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const TrainingRegistration: Story =  {
    args: {
        name: 'Training Registration',
        preset: 'trainingRegistration',
        onChange: undefined
    },
}