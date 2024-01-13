import { userEvent, within } from "@storybook/testing-library";
import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Job Application',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'Job Application Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const JobApplication: Story =  {
    args: {
        name: 'Job Application',
        preset: 'jobApplication',
        onChange: undefined
    },
}