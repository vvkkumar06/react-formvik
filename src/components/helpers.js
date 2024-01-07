export const getInitialFormState = (formFieldsConfig) => {
    const newState = {};
  
    formFieldsConfig.forEach(
      (config) => {
        newState[config.field] = config.defaultValue ?? ''
        if(!newState['_isValidField']) newState['_isValidField'] = {};
        if(config.inputProps?.required) {
          newState._isValidField[config.field] = undefined;
        }
      }
    );
    return newState;
  };


  export const mergeFieldsConfig =(config1, config2) => {
    const config1GroupByField = {};
    config1.fields?.forEach(item => {
      config1GroupByField[item.field+item.order] = item;
    })
    const config2GroupByField = {};
    config2.fields?.forEach(item => {
      config2GroupByField[item.field+item.order] = item;
    });

    const mergedConfig = { ...config1GroupByField, ...config2GroupByField};
    const fieldsList =  Object.values(mergedConfig);
    const fieldsByOrder = {};
    fieldsList.forEach((item) => {
      fieldsByOrder[item.order] = item;
    });
    return Object.values(fieldsByOrder);
  }
  
  export const mergeActionsConfig =(config1, config2) => {
    const config1GroupByField = {};
    config1.actions?.map(item => {
      config1GroupByField[item.type] = item;
    })
    const config2GroupByField = {};
    config2.actions?.map(item => {
      config2GroupByField[item.type] = item;
    });

    const mergedConfig = { ...config1GroupByField, ...config2GroupByField};
    return Object.values(mergedConfig);
  }
  