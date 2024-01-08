export const login = {
    fields: [
        {
            label: "Username",
            field: "username",
            inputProps: {
                type: "text"
            },
            order: 10
        },
        {
            label: "Password",
            field: "password",
            inputProps: {
                type: "password"
            },
            order: 20
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

export const register = {
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
            order: 10
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
            },
            order: 20
        },
        {
            label: "Email Address",
            field: "email",
            inputProps: {
                type: "email"
            },
            order: 30
        },
        {
            label: "Phone Number",
            field: "phone",
            inputProps: {
                type: "phone"
            },
            order: 40
        },
        {
            label: "Website",
            field: "website",
            inputProps: {
                type: "url"
            },
            order: 50
        },
        {
            label: 'Gender',
            field: 'gen',
            order: 60,
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
            },
            order: 80
        },
        {
            label: "Confirm Password",
            field: "confirmPassword",
            inputProps: {
                type: "password"
            },
            order: 90
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
            },
            order: 100
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

export const contactUs = {
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
            },
            order: 10
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
            },
            order: 20
        },
        {
            label: "Subject",
            field: "subject",
            inputProps: {
                type: "text"
            },
            order: 30
        },
        {
            label: "Message",
            field: "message",
            inputProps: {
                type: "text",
                rows: 4
            },
            order: 40
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


export const feedback = {
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
            },
            order: 10
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
            },
            order: 20
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
            },
            order: 30
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
            },
            order: 40
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

export const jobApplication = {
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
            },
            order: 10
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
            },
            order: 20
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
            },
            order: 30
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
            },
            order: 40
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
            },
            order: 50
        },
        {
            label: "Cover Letter",
            field: "coverLetter",
            inputProps: {
                type: "text",
                rows: 4
            },
            order: 60
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

export const passwordReset = {
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
            },
            order: 10
        },
        {
            label: "Username",
            field: "username",
            inputProps: {
                type: "text"
            },
            order: 20
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
            },
            order: 30
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
            },
            order: 40
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

export const inquiry= {
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
            },
            order: 10
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
            },
            order: 20
        },
        {
            label: "Phone Number",
            field: "phone",
            inputProps: {
                type: "tel"
            },
            order: 30
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
            },
            order: 40
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
            },
            order: 50
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

export const survey = {
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
            },
            order: 10
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
            },
            order: 20
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
            },
            order: 30
        },
        {
            label: "How did you hear about us?",
            field: "source",
            inputProps: {
                type: "text"
            },
            order: 40
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
            },
            order: 50
        },
        {
            label: "What improvements would you suggest?",
            field: "improvements",
            inputProps: {
                type: "text",
                rows: 4
            },
            order: 60
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


export const membershipRegistration = {
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
            },
            order: 10
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
            },
            order: 20
        },
        {
            label: "Phone Number",
            field: "phone",
            inputProps: {
                type: "tel"
            },
            order: 30
        },
        {
            label: "Address",
            field: "address",
            inputProps: {
                type: "text"
            },
            order: 40
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
            },
            order: 50
        },
        {
            label: "Credit Card",
            field: "paymentMethod",
            inputProps: {
                type: "radio",
                value: 'creditCard',
                required: true
            },
            validation: {
                errorMessage: 'Please select a payment method'
            },
            order: 60,
            css: {
                labelClass: 'form-check-label',
                inputClass: 'form-check-input',
                containerClass: 'form-check mt-4'
            }
        },
        {
            label: "PayPal",
            field: "paymentMethod",
            inputProps: {
                type: "radio",
                value: 'paypal',
                required: true
            },
            validation: {
                errorMessage: 'Please select a payment method'
            },
            order: 70,
            css: {
                labelClass: 'form-check-label',
                inputClass: 'form-check-input',
                containerClass: 'form-check mt-4'
            }
        },
        {
            label: "Bank Transfer",
            field: "paymentMethod",
            inputProps: {
                type: "radio",
                value: 'bankTransfer',
                required: true
            },
            validation: {
                errorMessage: 'Please select a payment method'
            },
            order: 80,
            css: {
                labelClass: 'form-check-label',
                inputClass: 'form-check-input',
                containerClass: 'form-check mt-4'
            }
        },
       
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

export const eventRegistration = {
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
            },
            order: 10
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
            },
            order: 20
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
            },
            order: 30
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
            },
            order: 40
        },
        {
            label: "Number of Guests",
            field: "guests",
            inputProps: {
                type: "number",
                min: 1
            },
            order: 50
        },
        {
            label: "Special Requests",
            field: "specialRequests",
            inputProps: {
                type: "text",
                rows: 4
            },
            order: 60
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
