

const FormField = ({ formName, config, formState, formCss, setFormState }) => {
  const localCss = config.css || {};
  const globalCss = formCss || {};
  const labelClass = localCss.labelClass ?? globalCss.labelClass;
  const inputClass = localCss.inputClass ?? globalCss.inputClass;
  const containerClass = localCss.containerClass ?? globalCss.containerClass;
  const errorClass = localCss.errorClass ?? globalCss.errorClass;
  const radioGroupClass = localCss.radioGroupClass ?? globalCss.radioGroupClass;
  const radioContainerClass = localCss.radioContainerClass ?? globalCss.radioContainerClass;
  const radioLabelClass = localCss.radioLabelClass ?? globalCss.radioLabelClass;

  const elId = `rqf-${formName}-${config.field}`;

  const onChange = ({ target }) => {
    updateFormState(target, config.inputProps?.type === 'checkbox');
  };

  const updateFormState = (target, isCheckbox) => setFormState({ ...formState, [config.field]: isCheckbox ? target.checked : target.value, _isValidField: { ...formState._isValidField, [config.field]: target.checkValidity() } });

  const renderLabel = (label, className) => <label htmlFor={elId} className={className ?? labelClass}>{label ?? config.label}</label>;

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
    } else if (config.inputProps.type === 'radio') {
      return (
        <div className={radioGroupClass}>
          {
            config.inputProps.options?.map(option => (
              <div className={radioContainerClass}>
                {(!option.labelPosition || option.labelPosition === 'start') && renderLabel(option.label, radioLabelClass)}
                <input value={option.value} {...config.inputProps} id={elId}
                  onChange={onChange} name={config.field} checked={formState[config.field] === option.value} className={inputClass} />
                {option.labelPosition === 'end' && renderLabel(option.label, radioLabelClass)}
              </div>
            ))
          }
        </div>);


    }
    else {
      return <input value={formState[config.field]} {...config.inputProps} id={elId}
        onChange={onChange} name={config.field} checked={formState[config.field]} className={inputClass} />
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
