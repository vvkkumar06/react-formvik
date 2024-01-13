export interface InputProps {
    [key: string]: any
}

export interface Classes {
    [key: string]: string
}

export interface Validation {
    errorMessage: string
}


export interface FieldConfig {
    label?: string;
    field: string;
    order?: number;
    labelPosition?: string;
    defaultValue?: any
    inputProps: InputProps
    validation?: Validation,
    css?: Classes
}

export type ActionConfig = {
    label: string;
    type: string;
    css?: Classes
}

export interface FormConfig {
    fields: Array<FieldConfig>;
    actions?: Array<ActionConfig>;
    css?: Classes;
}

export interface Presets {
    [key: string]: FormConfig;
}

export type FormProps = {
    name?: string;
    config?: FormConfig;
    onSubmit?: (fromState: any) => {};
    preset?: string;
    onChange?: (fromState: any) => {};
}

export type FormFieldProps = {
    formName?: string;
    config: FieldConfig;
    formState: FormState;
    formCss: Classes;
    setFormState: (fromState: FormState) => void
}


export type FieldConfigMap = {
    [key: string]: FieldConfig;
}
export type ActionConfigMap = {
    [key: string]: ActionConfig;
}

export type IsValidField = {
    [key: string]: boolean | undefined;
}

export type FormState = {
    [key: string]: any;
    _isValidField: IsValidField;
};

export type DropdownOption = {
    label: string;
    value: string;
    labelPosition?: string;
}