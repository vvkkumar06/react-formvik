import { FormConfig } from "./types";

export const login: FormConfig = {
    fields: [
        {
            label: "Username",
            field: "username",
            inputProps: {
                type: "text"
            },
        },
        {
            label: "Password",
            field: "password",
            inputProps: {
                type: "password"
            }
        }
    ],
    actions: [
        {
            label: "Login",
            type: "submit",
            css: {
                buttonClass: 'btn btn-primary ml-auto',
                containerClass: 'mt-4 d-flex justify-content-end'
            }
        }
    ],
    css: {
        labelClass: 'form-label',
        inputClass: 'form-control',
        containerClass: 'mt-4',
        formContainerClass: 'row'
    }
}

export const register: FormConfig = {
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
        },
        {
            label: "Last Name",
            field: "lastName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide valid Last Name'
            }
        },
        {
            label: "Email Address",
            field: "email",
            inputProps: {
                type: "email"
            }
        },
        {
            label: "Phone Number",
            field: "phone",
            inputProps: {
                type: "phone"
            }
        },
        {
            label: "Website",
            field: "website",
            inputProps: {
                type: "url"
            },
        },
        {
            label: 'Gender',
            field: 'gen',
            inputProps: {
                type: 'dropdown',
                options: [{ label: 'Select One', field: '' }, { label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }],
                selected: 'male'
            },
            css: {
                inputClass: 'form-select'
            }
        },
        {
            label: "Password",
            field: "password",
            inputProps: {
                type: "password"
            }
        },
        {
            label: "Confirm Password",
            field: "confirmPassword",
            inputProps: {
                type: "password"
            }
        },
        {
            label: "Creating an account means you'are okay with our Terms and Conditions and our Privacy Policiy",
            field: "toc",
            labelPosition: 'end',
            inputProps: {
                type: "checkbox"
            },
            css: {
                inputClass: 'w-10 mt-1',
                labelClass: 'fw-lighter fst-italic mx-2',
                containerClass: 'd-flex align-items-start mt-4'
            }
        }
    ],
    actions: [
        {
            label: "Register",
            type: "submit",
            css: {
                buttonClass: 'btn btn-primary ml-auto',
                containerClass: 'mt-4 d-flex justify-content-end'
            }
        }
    ],
    css: {
        labelClass: 'form-label',
        inputClass: 'form-control',
        containerClass: 'mt-4 col-6',
        formContainerClass: 'row'
    }
}

export const contactUs: FormConfig = {
    fields: [
        {
            label: "Full Name",
            field: "fullName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide your full name'
            }
        },
        {
            label: "Email Address",
            field: "email",
            inputProps: {
                type: "email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Subject",
            field: "subject",
            inputProps: {
                type: "text"
            }
        },
        {
            label: "Message",
            field: "message",
            inputProps: {
                type: "text",
                rows: 4
            }
        }
    ],
    actions: [
        {
            label: "Submit",
            type: "submit",
            css: {
                buttonClass: 'btn btn-primary ml-auto',
                containerClass: 'mt-4 d-flex justify-content-end'
            }
        }
    ],
    css: {
        labelClass: 'form-label',
        inputClass: 'form-control',
        containerClass: 'mt-4 col-6',
        formContainerClass: 'row'
    }
};


export const feedback: FormConfig = {
    fields: [
        {
            label: "Your Name",
            field: "name",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide your name'
            }
        },
        {
            label: "Email Address",
            field: "email",
            inputProps: {
                type: "email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Feedback Type",
            field: "feedbackType",
            inputProps: {
                type: "dropdown",
                options: [
                    { label: 'Select One', field: '' },
                    { label: 'General Feedback', value: 'general' },
                    { label: 'Bug Report', value: 'bug' },
                    { label: 'Feature Request', value: 'feature' }
                ],
                required: true
            },
            validation: {
                errorMessage: 'Please select a feedback type'
            }
        },
        {
            label: "Your Feedback",
            field: "feedback",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please provide your feedback'
            }
        }
    ],
    actions: [
        {
            label: "Submit Feedback",
            type: "submit",
            css: {
                buttonClass: 'btn btn-primary'
            }
        }
    ],
    css: {
        labelClass: 'form-label',
        inputClass: 'form-control',
        containerClass: 'mt-4 col-6',
        formContainerClass: 'row'
    }
};

export const jobApplication: FormConfig = {
    fields: [
        {
            label: "Full Name",
            field: "fullName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide your full name'
            }
        },
        {
            label: "Email Address",
            field: "email",
            inputProps: {
                type: "email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Phone Number",
            field: "phone",
            inputProps: {
                type: "tel",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid phone number'
            }
        },
        {
            label: "Applying for Position",
            field: "position",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please specify the position you are applying for'
            }
        },
        {
            label: "Resume/CV",
            field: "resume",
            inputProps: {
                type: "file",
                accept: ".pdf, .doc, .docx",
                required: true
            },
            validation: {
                errorMessage: 'Please upload your resume in PDF or Word format'
            }
        },
        {
            label: "Cover Letter",
            field: "coverLetter",
            inputProps: {
                type: "text",
                rows: 4
            }
        }
    ],
    actions: [
        {
            label: "Submit Application",
            type: "submit",
            css: {
                buttonClass: 'btn btn-primary'
            }
        }
    ],
    css: {
        labelClass: 'form-label',
        inputClass: 'form-control',
        containerClass: 'mt-4 col-6',
        formContainerClass: 'row'
    }
};

export const passwordReset: FormConfig = {
    fields: [
        {
            label: "Email Address",
            field: "email",
            inputProps: {
                type: "email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Username",
            field: "username",
            inputProps: {
                type: "text"
            }
        },
        {
            label: "New Password",
            field: "newPassword",
            inputProps: {
                type: "password",
                required: true
            },
            validation: {
                errorMessage: 'Password must be at least 8 characters long'
            }
        },
        {
            label: "Confirm New Password",
            field: "confirmNewPassword",
            inputProps: {
                type: "password",
                required: true
            },
            validation: {
                errorMessage: 'Passwords do not match'
            }
        }
    ],
    actions: [
        {
            label: "Reset Password",
            type: "submit",
            css: {
                buttonClass: 'btn btn-primary'
            }
        }
    ],
    css: {
        labelClass: 'form-label',
        inputClass: 'form-control',
        containerClass: 'mt-4 col-6',
        formContainerClass: 'row'
    }
};

export const inquiry: FormConfig = {
    fields: [
        {
            label: "Full Name",
            field: "fullName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide your full name'
            }
        },
        {
            label: "Email Address",
            field: "email",
            inputProps: {
                type: "email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Phone Number",
            field: "phone",
            inputProps: {
                type: "tel"
            }
        },
        {
            label: "Inquiry Type",
            field: "inquiryType",
            inputProps: {
                type: "dropdown",
                options: [
                    { label: 'Select One', field: '' },
                    { label: 'Product Inquiry', value: 'product' },
                    { label: 'Service Inquiry', value: 'service' },
                    { label: 'General Inquiry', value: 'general' }
                ],
                required: true
            },
            validation: {
                errorMessage: 'Please select an inquiry type'
            }
        },
        {
            label: "Message",
            field: "message",
            inputProps: {
                type: "text",
                rows: 4,
                required: true,
            },
            validation: {
                errorMessage: 'Please provide your inquiry message'
            }
        }
    ],
    actions: [
        {
            label: "Submit Inquiry",
            type: "submit",
            css: {
                buttonClass: 'btn btn-primary'
            }
        }
    ],
    css: {
        labelClass: 'form-label',
        inputClass: 'form-control',
        containerClass: 'mt-4 col-6',
        formContainerClass: 'row'
    }
};

export const survey: FormConfig = {
    fields: [
        {
            label: "Your Name",
            field: "name",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide your name'
            }
        },
        {
            label: "Email Address",
            field: "email",
            inputProps: {
                type: "email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Age",
            field: "age",
            inputProps: {
                type: "number",
                min: 18,
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid age (must be 18 or older)'
            }
        },
        {
            label: "How did you hear about us?",
            field: "source",
            inputProps: {
                type: "text"
            }
        },
        {
            label: "Rate your satisfaction with our products/services (1-10)",
            field: "satisfactionRating",
            inputProps: {
                type: "number",
                min: 1,
                max: 10,
                required: true
            },
            validation: {
                errorMessage: 'Please provide a rating between 1 and 10'
            }
        },
        {
            label: "What improvements would you suggest?",
            field: "improvements",
            inputProps: {
                type: "text",
                rows: 4
            }
        }
    ],
    actions: [
        {
            label: "Submit Survey",
            type: "submit",
            css: {
                buttonClass: 'btn btn-primary'
            }
        }
    ],
    css: {
        labelClass: 'form-label',
        inputClass: 'form-control',
        containerClass: 'mt-4 col-6',
        formContainerClass: 'row'
    }
};


export const membershipRegistration: FormConfig = {
    fields: [
        {
            label: "Full Name",
            field: "fullName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide your full name'
            }
        },
        {
            label: "Email Address",
            field: "email",
            inputProps: {
                type: "email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Phone Number",
            field: "phone",
            inputProps: {
                type: "tel"
            }
        },
        {
            label: "Address",
            field: "address",
            inputProps: {
                type: "text"
            }
        },
        {
            label: "Membership Type",
            field: "membershipType",
            inputProps: {
                type: "dropdown",
                options: [
                    { label: 'Select One', field: '' },
                    { label: 'Basic', value: 'basic' },
                    { label: 'Premium', value: 'premium' },
                    { label: 'Gold', value: 'gold' }
                ],
                required: true
            },
            validation: {
                errorMessage: 'Please select a membership type'
            }
        },
        {
            label: "Payment Method",
            field: "paymentMethod",
            inputProps: {
                type: "radio",
                options: [
                    { label: 'Credit Card', value: 'creditCard' },
                    { label: "PayPal", value: 'paypal' },
                    { label: "Bank Transfer", value: 'bankTransfer' }
                ],
                required: true
            },
            validation: {
                errorMessage: 'Please select a payment method'
            },
            css: {
                radioLabelClass: 'form-check-label',
                inputClass: 'form-check-input',
                radioContainerClass: 'form-check mt-4',
                radioGroupClass: 'd-flex gap-4'
            }
        }
    ],
    actions: [
        {
            label: "Join Now",
            type: "submit",
            css: {
                buttonClass: 'btn btn-primary'
            }
        }
    ],
    css: {
        labelClass: 'form-label',
        inputClass: 'form-control',
        containerClass: 'mt-4 col-6',
        formContainerClass: 'row'
    }
};

export const eventRegistration: FormConfig = {
    fields: [
        {
            label: "Full Name",
            field: "fullName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide your full name'
            }
        },
        {
            label: "Email Address",
            field: "email",
            inputProps: {
                type: "email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Phone Number",
            field: "phone",
            inputProps: {
                type: "tel",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid phone number'
            }
        },
        {
            label: "Event Name",
            field: "eventName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please specify the event you are registering for'
            }
        },
        {
            label: "Number of Guests",
            field: "guests",
            inputProps: {
                type: "number",
                min: 1
            }
        },
        {
            label: "Special Requests",
            field: "specialRequests",
            inputProps: {
                type: "text",
                rows: 4
            }
        }
    ],
    actions: [
        {
            label: "Register for Event",
            type: "submit",
            css: {
                buttonClass: 'btn btn-primary'
            }
        }
    ],
    css: {
        labelClass: 'form-label',
        inputClass: 'form-control',
        containerClass: 'mt-4 col-6',
        formContainerClass: 'row'
    }
};
