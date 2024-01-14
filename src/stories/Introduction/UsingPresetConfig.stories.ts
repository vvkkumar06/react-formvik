import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";
import * as presets from './../../components/presetConfigs';
import { convertCamelCaseToTitleCase } from './../../components/helpers';
const presetFields = Object.keys(presets);
const presetLabelObj: {[key: string]: string} = {};

presetFields.forEach((field: string) => {
    if(field) {
        presetLabelObj[field] = convertCamelCaseToTitleCase(field);
    }
});

const meta = {
    title: 'Introduction/Using Preset Config',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        preset: {
            options: presetFields,
            control: {
                type: 'select',
                labels: presetLabelObj
            }
        },
        onSubmit: {
            action: 'Form State: '
        }
    }
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UsingPresetConfig: Story = {
    args: {
        preset: 'login',
        onChange: undefined
    }
}

