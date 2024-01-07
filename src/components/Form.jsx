import { useEffect, useState } from "react";
import * as PropTypes from 'prop-types';
import FormField from "./FormField";
import { getInitialFormState, mergeActionsConfig, mergeFieldsConfig } from "./helpers";
import * as FormPresets from "./presetConfigs";


/**
 * Form component for generating dynamic forms
 */
export const Form = ({ name, config, onSubmit, preset, onChange }) => {
  if(!name && preset) {
    name = preset.charAt(0).toUpperCase() + preset.slice(1);
  }
  const formPreset = FormPresets[preset] || {};
  const formFieldsConfig = mergeFieldsConfig(formPreset, config);
  const formActionsConfig = mergeActionsConfig(formPreset, config);
  const formCss = { ...formPreset.css, ...config.css}
  
  const resetFormState = () => getInitialFormState(formFieldsConfig);
  const [formState, setFormState] = useState(resetFormState());

  const handleAction = ({ type }) => {
    switch (type) {
      case "submit":
        const formData = structuredClone(formState);
        delete formData._isValidField;
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
      onChange(formState)
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

      <footer className="rqf-footer">
        {formActionsConfig.map((actionConfig) => {
          return (
            <div className={`rqf-action ${actionConfig.css?.containerClass}`} key={`action-${actionConfig.label}`}>
              <button onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleAction(actionConfig)
                }
              } className={actionConfig.css?.buttonClass}
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

Form.propTypes = {
  /**
   * Name of the form, shows at the top e.g. Login, Register, Contact, etc.
   */
  name: PropTypes.string,

  /**
   * Initial form configuration
   */
  preset: PropTypes.string,

  /**
   * Custom form configuration
   */
  config: PropTypes.object,

  /**
   * Submit handler method
   */
  onSubmit: PropTypes.func
}


Form.defaultProps = {
  name: "",
  config: {},
  preset: "",
  onSubmit: undefined
}