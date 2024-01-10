import { Form } from "../../components/Form";

export default {
    title: 'Fields/Email',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
    }
}

export const Email = {
    args: {
        config: {
            fields: [
                {
                    label: 'Email',
                    field: 'email',
                    inputProps: {
                        type: 'email',
                        required: true
                    },
                    validation: {
                        errorMessage: 'Please provide valid Email!'
                    },
                    css: {
                        labelClass: 'form-label',
                        inputClass: 'form-control',
                        containerClass: 'mt-4'
                    }
                }
            ]
        }
    }
}

