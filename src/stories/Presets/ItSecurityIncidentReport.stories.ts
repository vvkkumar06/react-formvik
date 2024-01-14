import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/It Security Incident Report',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'ItSecurityIncidentReport Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const ItSecurityIncidentReport: Story =  {
    args: {
        name: 'It Security Incident Report',
        preset: 'itSecurityIncidentReport',
        onChange: undefined
    },
}