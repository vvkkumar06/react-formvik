import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Presets/Data Backup Request',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: 'DataBackupRequest Data:'
        }
    }
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const DataBackupRequest: Story =  {
    args: {
        name: 'Data Backup Request',
        preset: 'dataBackupRequest',
        onChange: undefined
    },
}