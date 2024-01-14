import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Software Evaluation',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'SoftwareEvaluation Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const SoftwareEvaluation: Story =  {
    args: {
        name: 'Software Evaluation',
        preset: 'softwareEvaluation',
        onChange: undefined
    },
}