import { Form } from "../../components/Form";

export default {
    title: 'Fields/Url',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
    }
}

export const Url = {
    args: {
        config: {
            fields: [
                {
                    label: 'Website',
                    field: 'url',
                    inputProps: {
                        type: 'url',
                        pattern: "^(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$"
                    },
                    validation: {
                        errorMessage: 'Please enter correct url!'
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



