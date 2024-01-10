import { Form } from "../../components/Form";

export default {
    title: 'Fields/Password',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
    }
}

export const Password = {
    args: {
        config: {
            fields: [
                {
                    label: "Password",
                    field: "password",
                    inputProps: {
                        type: "password",
                        required: true
                    },
                    validation: {
                        errorMessage: 'Please provide valid password'
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


