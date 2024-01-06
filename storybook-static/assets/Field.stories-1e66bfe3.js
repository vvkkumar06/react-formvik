import{F as M}from"./Form-87d68851.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const H={title:"Fields",component:M,parameters:{layout:"centered"}},e={args:{config:{fields:[{label:"First Name",field:"firstName",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please provide valid First Name"},order:2,css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4"}}]}}},n={args:{config:{fields:[{label:"Password",field:"password",inputProps:{type:"password",required:!0},validation:{errorMessage:"Please provide valid password"},order:2,css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4"}}]}}},r={args:{config:{fields:[{label:"Email",field:"email",inputProps:{type:"email",required:!0},validation:{errorMessage:"Please provide valid Email!"},order:2,css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4"}}]}}},s={args:{config:{fields:[{label:"Male",field:"gender",labelPosition:"end",inputProps:{type:"radio",value:"male"},order:1},{label:"Female",field:"gender",labelPosition:"end",inputProps:{type:"radio",value:"female"},order:2}],css:{labelClass:"form-check-label",inputClass:"form-check-input",containerClass:"form-check mt-4"}}}},a={args:{config:{fields:[{label:"Accept terms and condition",field:"toc",labelPosition:"end",inputProps:{type:"checkbox"},order:1}],css:{labelClass:"form-check-label",inputClass:"form-check-input",containerClass:"form-check mt-4"}}}},l={args:{config:{fields:[{label:"Website",field:"url",order:1,inputProps:{type:"url",pattern:"^(http://|https://)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$"},validation:{errorMessage:"Please enter correct url!"},css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4"}}]}}},o={args:{config:{fields:[{label:"Language",field:"lang",order:1,inputProps:{type:"dropdown",options:[{label:"Select One",field:""},{label:"Hindi",value:"Hindi"},{label:"English",value:"English"}],selected:""},css:{inputClass:"form-select",labelClass:"form-label"}}]}}};var i,t,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    config: {
      fields: [{
        label: "First Name",
        field: "firstName",
        inputProps: {
          type: "text",
          required: true
        },
        validation: {
          errorMessage: 'Please provide valid First Name'
        },
        order: 2,
        css: {
          labelClass: 'form-label',
          inputClass: 'form-control',
          containerClass: 'mt-4'
        }
      }]
    }
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    config: {
      fields: [{
        label: "Password",
        field: "password",
        inputProps: {
          type: "password",
          required: true
        },
        validation: {
          errorMessage: 'Please provide valid password'
        },
        order: 2,
        css: {
          labelClass: 'form-label',
          inputClass: 'form-control',
          containerClass: 'mt-4'
        }
      }]
    }
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,f,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    config: {
      fields: [{
        label: 'Email',
        field: 'email',
        inputProps: {
          type: 'email',
          required: true
        },
        validation: {
          errorMessage: 'Please provide valid Email!'
        },
        order: 2,
        css: {
          labelClass: 'form-label',
          inputClass: 'form-control',
          containerClass: 'mt-4'
        }
      }]
    }
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,C,P;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    config: {
      fields: [{
        label: 'Male',
        field: 'gender',
        labelPosition: 'end',
        inputProps: {
          type: 'radio',
          value: 'male'
        },
        order: 1
      }, {
        label: 'Female',
        field: 'gender',
        labelPosition: 'end',
        inputProps: {
          type: 'radio',
          value: 'female'
        },
        order: 2
      }],
      css: {
        labelClass: 'form-check-label',
        inputClass: 'form-check-input',
        containerClass: 'form-check mt-4'
      }
    }
  }
}`,...(P=(C=s.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var v,h,w;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    config: {
      fields: [{
        label: 'Accept terms and condition',
        field: 'toc',
        labelPosition: 'end',
        inputProps: {
          type: 'checkbox'
        },
        order: 1
      }],
      css: {
        labelClass: 'form-check-label',
        inputClass: 'form-check-input',
        containerClass: 'form-check mt-4'
      }
    }
  }
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,k,E;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    config: {
      fields: [{
        label: 'Website',
        field: 'url',
        order: 1,
        inputProps: {
          type: 'url',
          pattern: "^(http:\\/\\/|https:\\/\\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$"
        },
        validation: {
          errorMessage: 'Please enter correct url!'
        },
        css: {
          labelClass: 'form-label',
          inputClass: 'form-control',
          containerClass: 'mt-4'
        }
      }]
    }
  }
}`,...(E=(k=l.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var S,x,F;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    config: {
      fields: [{
        label: 'Language',
        field: 'lang',
        order: 1,
        inputProps: {
          type: 'dropdown',
          options: [{
            label: 'Select One',
            field: ''
          }, {
            label: 'Hindi',
            value: 'Hindi'
          }, {
            label: 'English',
            value: 'English'
          }],
          selected: ''
        },
        css: {
          inputClass: 'form-select',
          labelClass: 'form-label'
        }
      }]
    }
  }
}`,...(F=(x=o.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const Z=["Text","Password","Email","Radio","Checkbox","Url","Select"];export{a as Checkbox,r as Email,n as Password,s as Radio,o as Select,e as Text,l as Url,Z as __namedExportsOrder,H as default};
