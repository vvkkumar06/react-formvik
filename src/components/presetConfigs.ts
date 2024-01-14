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

export const contestEntry: FormConfig = {
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
            label: "Contest Code",
            field: "contestCode",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the contest code'
            }
        },
        {
            label: "Entry Description",
            field: "entryDescription",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please provide a description of your entry'
            }
        }
    ],
    actions: [
        {
            label: "Submit Entry",
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
export const productReview: FormConfig = {
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
            label: "Product Rating (1-5)",
            field: "rating",
            inputProps: {
                type: "number",
                min: 1,
                max: 5,
                required: true
            },
            validation: {
                errorMessage: 'Please provide a rating between 1 and 5'
            }
        },
        {
            label: "Review",
            field: "review",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please provide a review'
            }
        }
    ],
    actions: [
        {
            label: "Submit Review",
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
export const bugReport: FormConfig = {
    fields: [
        {
            label: "Reporter's Name",
            field: "reporterName",
            inputProps: {
                type: "text",
                required: true,
            },
            validation: {
                errorMessage: 'Please provide your name',
            },
        },
        {
            label: "Email",
            field: "email",
            inputProps: {
                type: "email",
                required: true,
            },
            validation: {
                errorMessage: 'Please provide a valid email address',
            },
        },
        {
            label: "Date",
            field: "date",
            inputProps: {
                type: "date",
                required: true,
            },
            validation: {
                errorMessage: 'Please select the date',
            },
        },
        {
            label: "Product Version",
            field: "productVersion",
            inputProps: {
                type: "text",
                required: true,
            },
            validation: {
                errorMessage: 'Please specify the product version',
            },
        },
        {
            label: "Operating System",
            field: "operatingSystem",
            inputProps: {
                type: "text",
                required: true,
            },
            validation: {
                errorMessage: 'Please specify the operating system',
            },
        },
        {
            label: "Description of Bug",
            field: "bugDescription",
            inputProps: {
                type: "text",
                rows: 4,
                required: true,
            },
            validation: {
                errorMessage: 'Please describe the bug',
            },
        },
        {
            label: "Steps to Reproduce",
            field: "stepsToReproduce",
            inputProps: {
                type: "text",
                rows: 4,
                required: true,
            },
            validation: {
                errorMessage: 'Please provide steps to reproduce the bug',
            },
        },
        {
            label: "Severity Level",
            field: "severityLevel",
            inputProps: {
                type: "dropdown",
                options: [
                    { label: 'Select One', field: '' },
                    { label: 'Critical', value: 'critical' },
                    { label: 'Major', value: 'major' },
                    { label: 'Minor', value: 'minor' },
                ],
                required: true,
            },
            validation: {
                errorMessage: 'Please select the severity level',
            },
            css: {
                inputClass: 'form-select',
            },
        },
    ],
    actions: [
        {
            label: "Submit Bug Report",
            type: "submit",
            css: {
                buttonClass: 'btn btn-primary',
            },
        },
    ],
    css: {
        labelClass: 'form-label',
        inputClass: 'form-control',
        containerClass: 'mt-4 col-6',
        formContainerClass: 'row',
    },
};
export const featureRequest: FormConfig = {
    fields: [
        {
            label: "Requester's Name",
            field: "requesterName",
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
            label: "Date",
            field: "requestDate",
            inputProps: {
                type: "date",
                required: true
            },
            validation: {
                errorMessage: 'Please select a date'
            }
        },
        {
            label: "Feature Description",
            field: "featureDescription",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please describe the requested feature'
            }
        },
        {
            label: "Justification",
            field: "justification",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please provide justification for the feature request'
            }
        },
        {
            label: "Priority Level",
            field: "priorityLevel",
            inputProps: {
                type: "dropdown",
                options: [
                    { label: 'Select One', field: '' },
                    { label: 'Low', value: 'low' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'High', value: 'high' }
                ],
                required: true
            },
            validation: {
                errorMessage: 'Please select a priority level'
            },
            css: {
                inputClass: 'form-select'
            }
        }
    ],
    actions: [
        {
            label: "Submit Request",
            type: "submit",
            css: {
                buttonClass: 'btn btn-primary',
                containerClass: 'd-flex justify-content-end'
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
export const changeRequest: FormConfig = {
    fields: [
        {
            label: "Requester's Name",
            field: "requesterName",
            inputProps: {
                type: "text",
                required: true,
            },
            validation: {
                errorMessage: 'Please provide the requester\'s name'
            },
        },
        {
            label: "Requester's Email",
            field: "requesterEmail",
            inputProps: {
                type: "email",
                required: true,
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            },
        },
        {
            label: "Date",
            field: "requestDate",
            inputProps: {
                type: "date",
                required: true,
            },
        },
        {
            label: "Change Description",
            field: "changeDescription",
            inputProps: {
                type: "text",
                required: true,
            },
            validation: {
                errorMessage: 'Please describe the change'
            },
        },
        {
            label: "Justification",
            field: "justification",
            inputProps: {
                type: "text",
                rows: 4,
                required: true,
            },
            validation: {
                errorMessage: 'Please provide justification for the change'
            },
        },
        {
            label: "Impact Analysis",
            field: "impactAnalysis",
            inputProps: {
                type: "text",
                rows: 4,
                required: true,
            },
            validation: {
                errorMessage: 'Please provide impact analysis of the change'
            },
        },
        {
            label: "Approval Section",
            field: "approvalSection",
            inputProps: {
                type: "text",
                required: true,
            },
            validation: {
                errorMessage: 'Please provide approval details'
            },
        },
    ],
    actions: [
        {
            label: "Submit Change Request",
            type: "submit",
            css: {
                buttonClass: 'btn btn-primary',
            },
        },
    ],
    css: {
        labelClass: 'form-label',
        inputClass: 'form-control',
        containerClass: 'mt-4 col-6',
        formContainerClass: 'row',
    },
};
export const itSupportRequest: FormConfig = {
    fields: [
        {
            label: "Requester's Name",
            field: "requesterName",
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
            label: "Date",
            field: "requestDate",
            inputProps: {
                type: "date",
                required: true
            }
        },
        {
            label: "Department",
            field: "department",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please specify your department'
            }
        },
        {
            label: "Type of Request",
            field: "requestType",
            inputProps: {
                type: "dropdown",
                options: [
                    { label: 'Select One', field: '' },
                    { label: 'Hardware Issue', value: 'hardware' },
                    { label: 'Software Issue', value: 'software' },
                    { label: 'Network Issue', value: 'network' },
                    { label: 'Other', value: 'other' }
                ],
                required: true
            },
            validation: {
                errorMessage: 'Please select the type of request'
            },
            css: {
                inputClass: 'form-select'
            }
        },
        {
            label: "Description of Issue",
            field: "issueDescription",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please provide a description of the issue'
            }
        },
        {
            label: "Urgency Level",
            field: "urgencyLevel",
            inputProps: {
                type: "radio",
                options: [
                    { label: 'Low', value: 'low' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'High', value: 'high' }
                ],
                required: true
            },
            validation: {
                errorMessage: 'Please select the urgency level'
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
            label: "Submit Request",
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
export const softwareEvaluation: FormConfig = {
    fields: [
        {
            label: "Evaluator's Name",
            field: "evaluatorName",
            inputProps: {
                type: "text",
                required: true,
            },
            validation: {
                errorMessage: 'Please provide the evaluator\'s name',
            },
        },
        {
            label: "Evaluator's Email",
            field: "evaluatorEmail",
            inputProps: {
                type: "email",
                required: true,
            },
            validation: {
                errorMessage: 'Please provide a valid email address',
            },
        },
        {
            label: "Date of Evaluation",
            field: "evaluationDate",
            inputProps: {
                type: "date",
                required: true,
            },
            validation: {
                errorMessage: 'Please select the date of evaluation',
            },
        },
        {
            label: "Software Name",
            field: "softwareName",
            inputProps: {
                type: "text",
                required: true,
            },
            validation: {
                errorMessage: 'Please provide the software name',
            },
        },
        {
            label: "Software Version",
            field: "softwareVersion",
            inputProps: {
                type: "text",
            },
        },
        {
            label: "Purpose of Evaluation",
            field: "evaluationPurpose",
            inputProps: {
                type: "text",
                rows: 4,
                required: true,
            },
            validation: {
                errorMessage: 'Please provide the purpose of the evaluation',
            },
        },
        {
            label: "Evaluation Criteria",
            field: "evaluationCriteria",
            inputProps: {
                type: "text",
                rows: 4,
                required: true,
            },
            validation: {
                errorMessage: 'Please specify the evaluation criteria',
            },
        },
        {
            label: "Recommendations",
            field: "recommendations",
            inputProps: {
                type: "text",
                rows: 4,
            },
        },
    ],
    actions: [
        {
            label: "Submit Evaluation",
            type: "submit",
            css: {
                buttonClass: 'btn btn-primary',
            },
        },
    ],
    css: {
        labelClass: 'form-label',
        inputClass: 'form-control',
        containerClass: 'mt-4 col-6',
        formContainerClass: 'row',
    },
};
export const trainingRegistration: FormConfig = {
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
            label: "Department",
            field: "department",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please specify your department'
            }
        },
        {
            label: "Training Title",
            field: "trainingTitle",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please specify the training title'
            }
        },
        {
            label: "Date of Training",
            field: "dateOfTraining",
            inputProps: {
                type: "date",
                required: true
            },
            validation: {
                errorMessage: 'Please select the date of the training'
            }
        },
        {
            label: "Special Requirements",
            field: "specialRequirements",
            inputProps: {
                type: "text",
                rows: 4
            }
        }
    ],
    actions: [
        {
            label: "Register for Training",
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
export const accessRequest: FormConfig = {
    fields: [
        {
            label: "Requester's Name",
            field: "requesterName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide your name'
            }
        },
        {
            label: "Requester's Email",
            field: "requesterEmail",
            inputProps: {
                type: "email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Date",
            field: "requestDate",
            inputProps: {
                type: "date",
                required: true
            },
            validation: {
                errorMessage: 'Please select a date'
            }
        },
        {
            label: "System/Application Name",
            field: "systemName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please specify the system or application name'
            }
        },
        {
            label: "Type of Access Requested",
            field: "accessType",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please specify the type of access requested'
            }
        },
        {
            label: "Justification",
            field: "justification",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please provide a justification for the access request'
            }
        },
        {
            label: "Approvals",
            field: "approvals",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the necessary approvals'
            }
        }
    ],
    actions: [
        {
            label: "Submit Request",
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
export const projectApproval: FormConfig = {
    fields: [
        {
            label: "Project Title",
            field: "projectTitle",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the project title'
            }
        },
        {
            label: "Project Manager's Name",
            field: "projectManager",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the project manager\'s name'
            }
        },
        {
            label: "Email",
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
            label: "Date",
            field: "date",
            inputProps: {
                type: "date",
                required: true
            },
            validation: {
                errorMessage: 'Please select a date'
            }
        },
        {
            label: "Project Objectives",
            field: "projectObjectives",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please provide the project objectives'
            }
        },
        {
            label: "Scope of Work",
            field: "scopeOfWork",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please define the scope of work'
            }
        },
        {
            label: "Budget",
            field: "budget",
            inputProps: {
                type: "number",
                min: 0,
                required: true
            },
            validation: {
                errorMessage: 'Please specify the project budget'
            }
        },
        {
            label: "Stakeholders",
            field: "stakeholders",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please list the stakeholders'
            }
        },
    ],
    actions: [
        {
            label: "Submit for Approval",
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
export const employeeOnboarding: FormConfig = {
    fields: [
        {
            label: "Full Name",
            field: "fullName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the full name of the new employee'
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
            label: "Position",
            field: "position",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please specify the position of the new employee'
            }
        },
        {
            label: "Department",
            field: "department",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please specify the department of the new employee'
            }
        },
        {
            label: "Start Date",
            field: "startDate",
            inputProps: {
                type: "date",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the start date for the new employee'
            }
        },
        {
            label: "Office Location",
            field: "officeLocation",
            inputProps: {
                type: "text"
            }
        },
        {
            label: "Manager's Name",
            field: "managersName",
            inputProps: {
                type: "text"
            }
        },
        {
            label: "Employee ID",
            field: "employeeId",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the employee ID'
            }
        },
        {
            label: "IT Access Needed",
            field: "itAccessNeeded",
            inputProps: {
                type: "checkbox"
            },
            css: {
                inputClass: 'form-check-input',
                labelClass: 'form-check-label',
                containerClass: 'form-check mt-4'
            }
        },
        {
            label: "Office Equipment Needed",
            field: "officeEquipmentNeeded",
            inputProps: {
                type: "checkbox"
            },
            css: {
                inputClass: 'form-check-input',
                labelClass: 'form-check-label',
                containerClass: 'form-check'
            }
        },
        {
            label: "Training Requirements",
            field: "trainingRequirements",
            inputProps: {
                type: "text",
                rows: 4
            }
        }
    ],
    actions: [
        {
            label: "Submit Onboarding Request",
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
export const itSecurityIncidentReport: FormConfig = {
    fields: [
        {
            label: "Reporter's Name",
            field: "reporterName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the reporter\'s name'
            }
        },
        {
            label: "Reporter's Email",
            field: "reporterEmail",
            inputProps: {
                type: "email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Date of Incident",
            field: "incidentDate",
            inputProps: {
                type: "date",
                required: true
            },
            validation: {
                errorMessage: 'Please select the date of the incident'
            }
        },
        {
            label: "Description of Incident",
            field: "incidentDescription",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please provide a description of the incident'
            }
        },
        {
            label: "Affected Systems",
            field: "affectedSystems",
            inputProps: {
                type: "text"
            }
        },
        {
            label: "Impact Assessment",
            field: "impactAssessment",
            inputProps: {
                type: "text",
                rows: 4
            }
        },
        {
            label: "Action Taken",
            field: "actionTaken",
            inputProps: {
                type: "text",
                rows: 4
            }
        }
    ],
    actions: [
        {
            label: "Submit Report",
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
export const serverMaintenanceRequest: FormConfig = {
    fields: [
        {
            label: "Requester's Name",
            field: "requesterName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the requester\'s name'
            }
        },
        {
            label: "Requester's Email",
            field: "requesterEmail",
            inputProps: {
                type: "email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Date of Request",
            field: "requestDate",
            inputProps: {
                type: "date",
                required: true
            },
            validation: {
                errorMessage: 'Please select the date of the request'
            }
        },
        {
            label: "Server Details",
            field: "serverDetails",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please provide details of the server'
            }
        },
        {
            label: "Type of Maintenance",
            field: "maintenanceType",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please specify the type of maintenance'
            }
        },
        {
            label: "Planned Downtime",
            field: "plannedDowntime",
            inputProps: {
                type: "text"
            }
        }
    ],
    actions: [
        {
            label: "Submit Request",
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
export const dataBackupRequest: FormConfig = {
    fields: [
        {
            label: "Requester's Name",
            field: "requesterName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the requester\'s name'
            }
        },
        {
            label: "Requester's Email",
            field: "requesterEmail",
            inputProps: {
                type: "email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Date of Request",
            field: "requestDate",
            inputProps: {
                type: "date",
                required: true
            },
            validation: {
                errorMessage: 'Please select the date of the request'
            }
        },
        {
            label: "Data to be Backed Up",
            field: "dataToBackup",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please specify the data to be backed up'
            }
        },
        {
            label: "Backup Frequency",
            field: "backupFrequency",
            inputProps: {
                type: "text"
            }
        },
        {
            label: "Storage Location",
            field: "storageLocation",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the storage location'
            }
        }
    ],
    actions: [
        {
            label: "Submit Request",
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
export const systemUpgradeRequest: FormConfig = {
    fields: [
        {
            label: "Requester's Name",
            field: "requesterName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the requester\'s name'
            }
        },
        {
            label: "Requester's Email",
            field: "requesterEmail",
            inputProps: {
                type: "email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Date of Request",
            field: "requestDate",
            inputProps: {
                type: "date",
                required: true
            },
            validation: {
                errorMessage: 'Please select the date of the request'
            }
        },
        {
            label: "System Details",
            field: "systemDetails",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please provide details of the system'
            }
        },
        {
            label: "Reason for Upgrade",
            field: "upgradeReason",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please specify the reason for the upgrade'
            }
        },
        {
            label: "Expected Benefits",
            field: "expectedBenefits",
            inputProps: {
                type: "text",
                rows: 4
            }
        }
    ],
    actions: [
        {
            label: "Submit Request",
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
export const telecommutingRequest: FormConfig = {
    fields: [
        {
            label: "Employee's Name",
            field: "employeeName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the employee\'s name'
            }
        },
        {
            label: "Employee's Email",
            field: "employeeEmail",
            inputProps: {
                type: "email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Date of Request",
            field: "requestDate",
            inputProps: {
                type: "date",
                required: true
            },
            validation: {
                errorMessage: 'Please select the date of the request'
            }
        },
        {
            label: "Telecommuting Dates",
            field: "telecommutingDates",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please specify the telecommuting dates'
            }
        },
        {
            label: "Reason for Telecommuting",
            field: "telecommutingReason",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please provide a reason for telecommuting'
            }
        },
        {
            label: "Work Plan",
            field: "workPlan",
            inputProps: {
                type: "text",
                rows: 4
            }
        }
    ],
    actions: [
        {
            label: "Submit Request",
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
export const technologyNeedsAssessment: FormConfig = {
    fields: [
        {
            label: "Department Name",
            field: "departmentName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the department name'
            }
        },
        {
            label: "Assessment Date",
            field: "assessmentDate",
            inputProps: {
                type: "date",
                required: true
            },
            validation: {
                errorMessage: 'Please select the date of the assessment'
            }
        },
        {
            label: "Current Technology Usage",
            field: "currentTechnologyUsage",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please provide details of current technology usage'
            }
        },
        {
            label: "Future Technology Needs",
            field: "futureTechnologyNeeds",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
            },
            validation: {
                errorMessage: 'Please specify future technology needs'
            }
        },
        {
            label: "Budget Estimates",
            field: "budgetEstimates",
            inputProps: {
                type: "text"
            }
        }
    ],
    actions: [
        {
            label: "Submit Assessment",
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
//stories not created for below presets
export const productInquiry: FormConfig = {
    fields: [
        {
            label: "Product Name",
            field: "productName",
            inputProps: {
                type: "text",
                required: true
            },
            validation: {
                errorMessage: 'Please specify the product name'
            }
        },
        {
            label: "Your Email",
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
            label: "Message",
            field: "message",
            inputProps: {
                type: "text",
                rows: 4,
                required: true
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
export const orderPlacement: FormConfig = {
    fields: [
        {
            label: "Customer Information",
            field: "customerInfo",
            inputProps: {
                type: "text",
                placeholder: "Full Name",
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
                placeholder: "example@example.com",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Shipping Address",
            field: "shippingAddress",
            inputProps: {
                type: "text",
                placeholder: "Street, City, Country",
                required: true
            },
            validation: {
                errorMessage: 'Please provide your shipping address'
            }
        },
        {
            label: "Payment Method",
            field: "paymentMethod",
            inputProps: {
                type: "dropdown",
                options: [
                    { label: 'Select One', field: '' },
                    { label: 'Credit Card', value: 'creditCard' },
                    { label: 'PayPal', value: 'paypal' },
                    { label: 'Other', value: 'other' }
                ],
                required: true
            },
            validation: {
                errorMessage: 'Please select a payment method'
            }
        },
        {
            label: "Credit Card Number",
            field: "creditCardNumber",
            inputProps: {
                type: "text",
                placeholder: "xxxx-xxxx-xxxx-xxxx",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid credit card number'
            }
        },
        {
            label: "Expiration Date",
            field: "expirationDate",
            inputProps: {
                type: "text",
                placeholder: "MM/YY",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid expiration date'
            }
        },
        {
            label: "CVV",
            field: "cvv",
            inputProps: {
                type: "text",
                placeholder: "123",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid CVV'
            }
        }
    ],
    actions: [
        {
            label: "Place Order",
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
export const creditCardPayment: FormConfig = {
    fields: [
        {
            label: "Cardholder Name",
            field: "cardholderName",
            inputProps: {
                type: "text",
                placeholder: "Enter cardholder name",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the cardholder name'
            }
        },
        {
            label: "Credit Card Number",
            field: "creditCardNumber",
            inputProps: {
                type: "text",
                placeholder: "xxxx-xxxx-xxxx-xxxx",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid credit card number'
            }
        },
        {
            label: "Expiration Date",
            field: "expirationDate",
            inputProps: {
                type: "text",
                placeholder: "MM/YY",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid expiration date'
            }
        },
        {
            label: "CVV",
            field: "cvv",
            inputProps: {
                type: "text",
                placeholder: "123",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid CVV'
            }
        },
        {
            label: "Amount",
            field: "amount",
            inputProps: {
                type: "number",
                placeholder: "Enter amount",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid amount'
            }
        }
    ],
    actions: [
        {
            label: "Make Payment",
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
export const paypalPayment: FormConfig = {
    fields: [
        {
            label: "PayPal Email",
            field: "paypalEmail",
            inputProps: {
                type: "email",
                placeholder: "Enter PayPal email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid PayPal email address'
            }
        },
        {
            label: "Amount",
            field: "amount",
            inputProps: {
                type: "number",
                placeholder: "Enter amount",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid amount'
            }
        }
    ],
    actions: [
        {
            label: "Proceed with PayPal",
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
export const bankTransferDetails: FormConfig = {
    fields: [
        {
            label: "Account Holder Name",
            field: "accountHolderName",
            inputProps: {
                type: "text",
                placeholder: "Enter account holder name",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the account holder name'
            }
        },
        {
            label: "Bank Name",
            field: "bankName",
            inputProps: {
                type: "text",
                placeholder: "Enter bank name",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the bank name'
            }
        },
        {
            label: "Account Number",
            field: "accountNumber",
            inputProps: {
                type: "text",
                placeholder: "Enter account number",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid account number'
            }
        },
        {
            label: "Amount",
            field: "amount",
            inputProps: {
                type: "number",
                placeholder: "Enter amount",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid amount'
            }
        }
    ],
    actions: [
        {
            label: "Submit Bank Transfer",
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
export const vehicleRentalReservation: FormConfig = {
    fields: [
        {
            label: "Pick-up Location",
            field: "pickupLocation",
            inputProps: {
                type: "text",
                placeholder: "Enter pick-up location",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the pick-up location'
            }
        },
        {
            label: "Drop-off Location",
            field: "dropoffLocation",
            inputProps: {
                type: "text",
                placeholder: "Enter drop-off location",
                required: true
            },
            validation: {
                errorMessage: 'Please provide the drop-off location'
            }
        },
        {
            label: "Pick-up Date and Time",
            field: "pickupDateTime",
            inputProps: {
                type: "datetime-local",
                required: true
            },
            validation: {
                errorMessage: 'Please select a valid pick-up date and time'
            }
        },
        {
            label: "Drop-off Date and Time",
            field: "dropoffDateTime",
            inputProps: {
                type: "datetime-local",
                required: true
            },
            validation: {
                errorMessage: 'Please select a valid drop-off date and time'
            }
        },
        {
            label: "Vehicle Type",
            field: "vehicleType",
            inputProps: {
                type: "dropdown",
                options: [
                    { label: 'Select One', field: '' },
                    { label: 'Sedan', value: 'sedan' },
                    { label: 'SUV', value: 'suv' },
                    { label: 'Truck', value: 'truck' }
                ],
                required: true
            },
            validation: {
                errorMessage: 'Please select a vehicle type'
            }
        },
        {
            label: "Additional Comments",
            field: "comments",
            inputProps: {
                type: "text",
                rows: 4
            }
        }
    ],
    actions: [
        {
            label: "Submit Reservation",
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
export const driverApplication: FormConfig = {
    fields: [
        {
            label: "Full Name",
            field: "fullName",
            inputProps: {
                type: "text",
                placeholder: "Enter your full name",
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
                placeholder: "Enter your email",
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
                placeholder: "Enter your phone number",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid phone number'
            }
        },
        {
            label: "Driving License Number",
            field: "licenseNumber",
            inputProps: {
                type: "text",
                placeholder: "Enter your driving license number",
                required: true
            },
            validation: {
                errorMessage: 'Please provide your driving license number'
            }
        },
        {
            label: "Vehicle Type",
            field: "vehicleType",
            inputProps: {
                type: "dropdown",
                options: [
                    { label: 'Select One', field: '' },
                    { label: 'Car', value: 'car' },
                    { label: 'Truck', value: 'truck' },
                    { label: 'Motorcycle', value: 'motorcycle' }
                ],
                required: true
            },
            validation: {
                errorMessage: 'Please select the type of vehicle you drive'
            }
        },
        {
            label: "Additional Comments",
            field: "comments",
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
export const transportationFeedback: FormConfig = {
    fields: [
        {
            label: "Your Name",
            field: "name",
            inputProps: {
                type: "text",
                placeholder: "Enter your name",
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
                placeholder: "Enter your email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Rating",
            field: "rating",
            inputProps: {
                type: "number",
                min: 1,
                max: 5,
                placeholder: "Enter your rating",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a rating between 1 and 5'
            }
        },
        {
            label: "Feedback",
            field: "feedback",
            inputProps: {
                type: "text",
                rows: 4,
                placeholder: "Provide your feedback",
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
export const hotelReservation: FormConfig = {
    fields: [
        {
            label: "Full Name",
            field: "fullName",
            inputProps: {
                type: "text",
                placeholder: "Enter your full name",
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
                placeholder: "Enter your email",
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
                placeholder: "Enter your phone number",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid phone number'
            }
        },
        {
            label: "Check-in Date",
            field: "checkInDate",
            inputProps: {
                type: "date",
                required: true
            },
            validation: {
                errorMessage: 'Please select a valid check-in date'
            }
        },
        {
            label: "Check-out Date",
            field: "checkOutDate",
            inputProps: {
                type: "date",
                required: true
            },
            validation: {
                errorMessage: 'Please select a valid check-out date'
            }
        },
        {
            label: "Number of Guests",
            field: "numberOfGuests",
            inputProps: {
                type: "number",
                min: 1,
                required: true
            },
            validation: {
                errorMessage: 'Please specify the number of guests'
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
            label: "Submit Reservation",
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
export const restaurantReservation: FormConfig = {
    fields: [
        {
            label: "Full Name",
            field: "fullName",
            inputProps: {
                type: "text",
                placeholder: "Enter your full name",
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
                placeholder: "Enter your email",
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
                placeholder: "Enter your phone number",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid phone number'
            }
        },
        {
            label: "Reservation Date",
            field: "reservationDate",
            inputProps: {
                type: "date",
                required: true
            },
            validation: {
                errorMessage: 'Please select a valid reservation date'
            }
        },
        {
            label: "Number of Guests",
            field: "numberOfGuests",
            inputProps: {
                type: "number",
                min: 1,
                required: true
            },
            validation: {
                errorMessage: 'Please specify the number of guests'
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
            label: "Submit Reservation",
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
export const hotelStayFeedback: FormConfig = {
    fields: [
        {
            label: "Your Name",
            field: "name",
            inputProps: {
                type: "text",
                placeholder: "Enter your name",
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
                placeholder: "Enter your email",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a valid email address'
            }
        },
        {
            label: "Rating",
            field: "rating",
            inputProps: {
                type: "number",
                min: 1,
                max: 5,
                placeholder: "Enter your rating",
                required: true
            },
            validation: {
                errorMessage: 'Please provide a rating between 1 and 5'
            }
        },
        {
            label: "Feedback",
            field: "feedback",
            inputProps: {
                type: "text",
                rows: 4,
                placeholder: "Provide your feedback",
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
