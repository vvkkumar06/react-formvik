import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Introduction/Using Preset Config',
    component: Form,
    // tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        preset: {
            options: ['login', 'register', 'contactUs', 'feedback', 'jobApplication', 'passwordReset', 'inquiry', 'survey', 'membershipRegistration', 'eventRegistration'],
            control: {
                type: 'radio',
                labels: {
                    login: 'Login',
                    register: 'Register',
                    contactUs: 'Contact',
                    feedback: 'Feedback',
                    jobApplication: 'Job Application',
                    passwordReset: 'Password Reset',
                    inquiry: 'Inquiry',
                    survey: 'Survey',
                    membershipRegistration: 'Membership Registration',
                    eventRegistration: 'Event Registration'
                }
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

