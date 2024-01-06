import { Form } from './../components/Form';

export default {
    title: 'Form',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        preset: {
            options: ['login', 'register'],
            control: {
                type: 'radio',
                labels: {
                    login: 'Login',
                    register: 'Register'
                }
            }
        }
    }
}

export const UsingPresetConfig = {
    args: {
        preset: 'login'
    }
}

export const InjectingCustomConfig = {
    args: {
        preset: 'login',
        config: {
            fields: [
                {
                    label: 'Age',
                    field: 'age',
                    order: 22,
                    inputProps: {
                        type: 'number',
                        max: 100,
                        min: 18
                    },
                    validation: {
                        errorMessage: 'Please enter valid age!'
                    },
                    css: {
                        labelClass: 'form-label',
                        inputClass: 'form-control',
                        containerClass: 'mt-4'
                    }
                }
            ]
        },
    },

}