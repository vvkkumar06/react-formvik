import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Technology Needs Assessment',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'TechnologyNeedsAssessment Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const TechnologyNeedsAssessment: Story =  {
    args: {
        name: 'Technology Needs Assessment',
        preset: 'technologyNeedsAssessment',
        onChange: undefined
    },
}