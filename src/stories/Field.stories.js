import { Form } from "../components/Form";

export default {
    title: 'Fields',
    component: Form,
    parameters: {
        layout: 'centered'
    }
}

export const Text = {
    args: {
        config: {
            fields: [
                {
                    label: "First Name",
                    field: "firstName",
                    inputProps: {
                        type: "text",
                        required: true
                    },
                    validation: {
                        errorMessage: 'Please provide valid First Name'
                    },
                    order: 2,
                    css: {
                        labelClass: 'form-label',
                        inputClass: 'form-control',
                        containerClass: 'mt-4'
                    }
                },

            ]
        }
    }
}

export const Password = {
    args: {
        config: {
            fields: [
                {
                    label: "Password",
                    field: "password",
                    inputProps: {
                        type: "password",
                        required: true
                    },
                    validation: {
                        errorMessage: 'Please provide valid password'
                    },
                    order: 2,
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

export const Email = {
    args: {
        config: {
            fields: [
                {
                    label: 'Email',
                    field: 'email',
                    inputProps: {
                        type: 'email',
                        required: true
                    },
                    validation: {
                        errorMessage: 'Please provide valid Email!'
                    },
                    order: 2,
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

export const Radio = {
    args: {
        config: {
            fields: [
                {
                    label: 'Male',
                    field: 'gender',
                    labelPosition: 'end',
                    inputProps: {
                        type: 'radio',
                        value: 'male'
                    },
                    order: 1
                },
                {
                    label: 'Female',
                    field: 'gender',
                    labelPosition: 'end',
                    inputProps: {
                        type: 'radio',
                        value: 'female'
                    },
                    order: 2
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


export const Checkbox = {
    args: {
        config: {
            fields: [
                {
                    label: 'Accept terms and condition',
                    field: 'toc',
                    labelPosition: 'end',
                    inputProps: {
                        type: 'checkbox',
                    },
                    order: 1
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

export const Url = {
    args: {
        config: {
            fields: [
                {
                    label: 'Website',
                    field: 'url',
                    order: 1,
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

export const Select = {
    args: {
        config: {
            fields: [
                {
                    label: 'Language',
                    field: 'lang',
                    order: 1,
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
