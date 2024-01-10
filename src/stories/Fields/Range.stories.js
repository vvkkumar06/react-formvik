import { Form } from "../../components/Form";

export default {
    title: 'Fields/Range',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
    }
}

export const Range = {
    args: {
        config: {
            fields: [
                {
                    label: 'Volume',
                    field: 'vol',
                    defaultValue: 40,
                    inputProps: {
                        type: 'range',
                        min: 20,
                        max: 80,
                        step: 10
                    }, css: {
                        labelClass: 'form-label m-2',
                        containerClass: 'mt-4 d-flex align-items-center'
                    }
                }

            ]
        }
    }
}

