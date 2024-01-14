import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Feature Request',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'FeatureRequest Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const FeatureRequest: Story =  {
    args: {
        name: 'Feature Request',
        preset: 'featureRequest',
        onChange: undefined
    },
}