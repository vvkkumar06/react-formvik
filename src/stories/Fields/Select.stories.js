import { Form } from "../../components/Form";

export default {
    title: 'Fields/Select',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
    }
}
export const Select = {
    args: {
        config: {
            fields: [
                {
                    label: 'Language',
                    field: 'lang',
                    inputProps: {
                        type: 'dropdown',
                        options: [{ label: 'Select One', field: '' }, { label: 'Hindi', value: 'Hindi' }, { label: 'English', value: 'English' }],
                        selected: ''
                    },
                    css: {
                        inputClass: 'form-select',
                        labelClass: 'form-label'
                    }
                },
            ]
        }
    }
}
