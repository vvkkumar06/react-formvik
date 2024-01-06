import{F as l}from"./Form-87d68851.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const d={title:"Form",component:l,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{preset:{options:["login","register"],control:{type:"radio",labels:{login:"Login",register:"Register"}}}}},e={args:{preset:"login"}},r={args:{preset:"login",config:{fields:[{label:"Age",field:"age",order:22,inputProps:{type:"number",max:100,min:18},validation:{errorMessage:"Please enter valid age!"},css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4"}}]}}};var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    preset: 'login'
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var a,t,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    preset: 'login',
    config: {
      fields: [{
        label: 'Age',
        field: 'age',
        order: 22,
        inputProps: {
          type: 'number',
          max: 100,
          min: 18
        },
        validation: {
          errorMessage: 'Please enter valid age!'
        },
        css: {
          labelClass: 'form-label',
          inputClass: 'form-control',
          containerClass: 'mt-4'
        }
      }]
    }
  }
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const u=["UsingPresetConfig","InjectingCustomConfig"];export{r as InjectingCustomConfig,e as UsingPresetConfig,u as __namedExportsOrder,d as default};
