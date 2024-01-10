import { Form } from "../../components/Form";

export default {
    title: 'Fields/Color',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
    }
}

export const Color = {
    args: {
        config: {
            fields: [
                {
                    label: 'Choose Color',
                    field: 'color',
                    inputProps: {
                        type: 'color',
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

