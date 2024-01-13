import { useEffect, useState, FC, ReactNode, useRef } from "react";
import FormField from "./FormField";
import { debounce, getInitialFormState, mergeActionsConfig, mergeFieldsConfig } from "./helpers";
import * as presets from "./presetConfigs";
import { FormProps, FormState, Presets } from "./types";

const FormPresets: Presets = presets;


/**
 * Form component for generating dynamic forms
 */
const Form = ({ name, config, onSubmit, preset = '', onChange }: FormProps): ReactNode => {
  if(!name && preset) {
    name = preset.charAt(0).toUpperCase() + preset.slice(1);
  }
  const formPreset = FormPresets[preset];
  const formFieldsConfig = mergeFieldsConfig(formPreset, config);
  const formActionsConfig = mergeActionsConfig(formPreset, config);
  const formCss = { ...formPreset?.css, ...config?.css};
  
  const resetFormState = () => getInitialFormState(formFieldsConfig);
  const [formState, setFormState] = useState(resetFormState() as FormState);
  const onChangeDebounce = useRef(debounce(onChange, 500));

  const handleAction = ({ type }: { type: string}) => {
    switch (type) {
      case "submit":
        const formData: { [key: string]: any} = structuredClone(formState);
        delete formData._isValidField
        onSubmit && onSubmit(formData);
        break;
      case "reset":
        setFormState(resetFormState());
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if(onChange) {
      onChangeDebounce.current(formState);
    }
  }, [formState])

  return (
    <form noValidate className={formCss.formClass}>
      <header className="rqf-header">
        <h1>{name}</h1>
      </header>
      <main className={`rqf-main ${formCss.formContainerClass}`}>
        {formFieldsConfig.map((fieldConfig) => {
          return (
            <FormField
              formName={name}
              config={fieldConfig}
              formState={formState}
              formCss={formCss}
              setFormState={setFormState}
              key={`field-${fieldConfig.label}`}
            />
          );
        })}
      </main>

      <footer className={`rqf-footer ${formCss.footerClass}`}>
        {formActionsConfig.map((actionConfig) => {
          return (
            <div className={`rqf-action ${actionConfig?.css?.containerClass ??  formCss.containerClass}`} key={`action-${actionConfig.label}`}>
              <button onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleAction(actionConfig)
                }
              } className={actionConfig?.css?.buttonClass ?? formCss.buttonClass}
                disabled={
                  Object.values(formState._isValidField).includes(undefined) || 
                  Object.values(formState._isValidField).includes(false)}
              >
                {actionConfig.label}
              </button>
            </div>
          );
        })}
      </footer>
    </form>
  );
};


export default Form;