

const FormField = ({ formName, config, formState, formCss, setFormState }) => {
  const localCss = config.css || {};
  const globalCss = formCss || {};
  const labelClass = localCss.labelClass ?? globalCss.labelClass;
  const inputClass = localCss.inputClass ?? globalCss.inputClass;
  const containerClass = localCss.containerClass ?? globalCss.containerClass;
  const errorClass = localCss.errorClass ?? globalCss.errorClass;

  const elId = `rqf-${formName}-${config.field}`;

  const onChange = ({ target }) => {
    updateFormState(target, config.inputProps?.type === 'checkbox');
  };

  const updateFormState = (target, isCheckbox) => setFormState({ ...formState, [config.field]: isCheckbox ? target.checked : target.value, _isValidField: { ...formState._isValidField, [config.field]: target.checkValidity() } });

  const renderLabel = () => <label htmlFor={elId} className={labelClass}>{config.label}</label>;

  const renderField = () => {
    if (config.inputProps.type === 'dropdown') {
      return <select value={formState[config.field]} id={elId} onChange={onChange} name={config.field} className={inputClass}>
        {
          config.inputProps.options?.map(option => <option value={option.value}
            key={option.value} {...(config.inputProps.selected === option.value ? { selected: true } : { selected: false })}>{option.label}</option>)
        }
      </select>
    } else if (config.inputProps.type === "text" && (config.inputProps.rows || config.inputProps.cols)) {
      return <textarea {...config.inputProps} id={elId}
        onChange={onChange} name={config.field} className={inputClass} >{formState[config.field]}</textarea>
    }
    else {
      return <input value={formState[config.field]} {...config.inputProps} id={elId}
        onChange={onChange} name={config.field} checked={config.inputProps.type !== 'radio' ? formState[config.field] : formState[config.field] === config.inputProps.value} className={inputClass} />
    };
  }


  return (
    <div className={`rqf-el ${containerClass}`}>
      {(!config.labelPosition || config.labelPosition === 'start') && renderLabel()}
      {renderField()}
      {config.labelPosition === 'end' && renderLabel()}
      {formState._isValidField[config.field] !== undefined && !formState._isValidField[config.field] && (
        <div className={`invalid-feedback d-flex ${errorClass}`}>
          {config.validation?.errorMessage}
        </div>
      )}
    </div>
  );
};

export default FormField;
