import { ActionConfig, ActionConfigMap, FieldConfig, FieldConfigMap, FormConfig, FormState } from "./types";

export const getInitialFormState = (formFieldsConfig: Array<FieldConfig>): FormState => {
    const newState: FormState = { _isValidField: {}};
  
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


  export const mergeFieldsConfig = (config1: FormConfig | undefined, config2: FormConfig | undefined): Array<FieldConfig> => {
    const config1GroupByField: FieldConfigMap = {};
    config1?.fields?.forEach(item => {
      config1GroupByField[item.field] = item;
    })
    const config2GroupByField: FieldConfigMap = {};
    config2?.fields?.forEach(item => {
      config2GroupByField[item.field] = item;
    });

    const mergedConfig = { ...config1GroupByField, ...config2GroupByField};
    const fieldsList =  Object.values(mergedConfig);
    fieldsList.forEach((item: FieldConfig, index: number) => {
      if(item.order !== undefined && item.order > 0){
        const adjustedItem = fieldsList.splice(index, 1);
        fieldsList.splice(item.order - 1, 0, adjustedItem[0]);
      }
    });
    return fieldsList;
  }
  
  export const mergeActionsConfig =(config1: FormConfig | undefined, config2: FormConfig | undefined): Array<ActionConfig> => {
    const config1GroupByField: ActionConfigMap = {};
    config1?.actions?.map((item: ActionConfig) => {
      config1GroupByField[item.type] = item;
    })
    const config2GroupByField: ActionConfigMap = {};
    config2?.actions?.map(item => {
      config2GroupByField[item.type] = item;
    });

    const mergedConfig = { ...config1GroupByField, ...config2GroupByField};
    return Object.values(mergedConfig);
  }
  