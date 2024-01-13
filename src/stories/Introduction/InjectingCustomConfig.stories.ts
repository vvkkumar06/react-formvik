import { Meta, StoryObj } from '@storybook/react';
import Form from "../../components/Form";

const meta = {
    title: 'Introduction/Injecting Custom Config',
    component: Form,
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

export const InjectingCustomConfig: Story = {
    args: {
        preset: 'login',
        config: {
            fields: [
                {
                    label: 'Age',
                    field: 'age',
                    order: 3,
                    inputProps: {
                        type: 'number',
                        max: 100,
                        min: 18
                    },
                    validation: {
                        errorMessage: 'Please enter valid age!'
                    }
                }
            ]
        },
        onChange: undefined
    },

}

