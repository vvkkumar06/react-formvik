import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Project Approval',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: `ProjectApproval Data:`
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const ProjectApproval: Story =  {
    args: {
        name: 'Project Approval',
        preset: 'projectApproval',
        onChange: undefined
    },
}