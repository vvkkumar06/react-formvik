import { Form } from '../../components/Form';

export default {
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
}

export const UsingPresetConfig = {
    args: {
        preset: 'login'
    }
}

