import { Form } from "../../components/Form";

export default {
    title: 'Fields/Date',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
    }
}

export const Date = {
    args: {
        config: {
            fields: [
                {
                    label: 'Delivery Date',
                    field: 'deliveryDate',
                    inputProps: {
                        type: 'date'
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
