import { Form } from "../components/Form";

export default {
    title: 'Fields',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        onChange: { action: 'Form State: '}
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

export const MultilineText = {
    args: {
        config: {
            fields: [
                {
                    label: "Comment",
                    field: "comment",
                    inputProps: {
                        type: "text",
                        rows: 10,
                        cols: 50
                    },
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

export const Number = {
    args: {
        config: {
            fields: [
                {
                    label: "Age",
                    field: "age",
                    inputProps: {
                        type: "number",
                        required: true
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

export const Url = {
    args: {
        config: {
            fields: [
                {
                    label: 'Website',
                    field: 'url',
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

