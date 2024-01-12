
import { Form } from "../../components/Form";

export default {
    title: 'Fields/File',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
    }
}
export const File = {
    args: {
        config: {
            fields: [
                {
                    label: 'Upload',
                    field: 'resume',
                    inputProps: {
                        type: 'file',
                        multiple: true
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

