import { Form } from "../../components/Form";

export default {
    title: 'Fields/Checkbox',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
    }
}

export const Checkbox = {
    args: {
        config: {
            fields: [
                {
                    label: 'Accept terms and condition',
                    field: 'toc',
                    labelPosition: 'end',
                    defaultValue: false,
                    inputProps: {
                        type: 'checkbox',
                    },
                }
            ],
            css: {
                labelClass: 'form-check-label',
                inputClass: 'form-check-input',
                containerClass: 'form-check mt-4'
            }
        }
    }
}

