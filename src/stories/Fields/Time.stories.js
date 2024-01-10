import { Form } from "../../components/Form";

export default {
    title: 'Fields/Time',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
    }
}

export const Time = {
    args: {
        config: {
            fields: [
                {
                    label: 'Pickup Time',
                    field: 'pickupTime',
                    inputProps: {
                        type: 'time',
                        min: "09:00",
                        max: "18:00"
                    },
                    validation: {
                        errorMessage: 'Please provide correct time!'
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

