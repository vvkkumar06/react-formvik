import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Employee Onboarding',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'EmployeeOnboarding Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const EmployeeOnboarding: Story =  {
    args: {
        name: 'Employee Onboarding',
        preset: 'employeeOnboarding',
        onChange: undefined
    },
}