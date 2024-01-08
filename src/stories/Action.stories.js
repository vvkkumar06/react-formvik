import { Form } from '../components/Form'
const fields = [
    {
        label: "Address1",
        field: "add1",
        inputProps: {
            type: "text",
        },
        order: 1,
        css: {
            labelClass: 'form-label',
            inputClass: 'form-control',
            containerClass: 'mt-4'
        }
    },
    {
        label: "Address2",
        field: "add2",
        inputProps: {
            type: "text",
        },
        order: 2,
        css: {
            labelClass: 'form-label',
            inputClass: 'form-control',
            containerClass: 'mt-4'
        }
    },
];

export default {
    title: 'Actions',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onSubmit: {
            action: "Form State: "
        }
    }
}

export const Submit = {
    args: {
        config: {
            fields,
            actions: [
                {
                    label: "Submit",
                    type: "submit",
                    css: {
                        buttonClass: 'btn btn-primary ml-auto',
                        containerClass: 'mt-4 d-flex justify-content-end'
                    }
                }
            ]
        }
    }
}

export const Reset = {
    args: {
        config: {
            fields,
            actions: [
                {
                    label: "Clear",
                    type: "reset",
                },
                {
                    label: "Done",
                    type: "submit",
                }
            ],
            css: {
                buttonClass: 'btn btn-primary ml-auto',
                containerClass: 'mt-4 d-flex justify-content-end',
                footerClass: 'd-flex gap-2 justify-content-end'
            }
        }
    }
}