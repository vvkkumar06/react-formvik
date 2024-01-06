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