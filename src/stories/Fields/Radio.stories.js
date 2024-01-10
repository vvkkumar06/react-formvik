import { Form } from "../../components/Form";

export default {
    title: 'Fields/Radio',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
    }
}

export const Radio = {
    args: {
        config: {
            fields: [
                {
                    label: 'Gender',
                    field: 'gender',
                    inputProps: {
                        type: 'radio',
                        options: [
                            {
                                label: 'Male', value: 'male',
                            },
                            {
                                label: 'Female', value: 'female'
                            }
                        ]
                    },
                }
            ],
            css: {
                radioLabelClass: 'form-check-label',
                inputClass: 'form-check-input',
                radioContainerClass: 'form-check mt-4',
                radioGroupClass: 'd-flex gap-4'
            }
        }
    }
}


