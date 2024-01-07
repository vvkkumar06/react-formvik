import{F as I}from"./Form-f0678954.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const Y={title:"Fields",component:I,parameters:{layout:"centered"},argTypes:{onChange:{action:"Form State: "}}},e={args:{config:{fields:[{label:"First Name",field:"firstName",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please provide valid First Name"},order:2,css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4"}}]}}},n={args:{config:{fields:[{label:"Age",field:"age",inputProps:{type:"number",required:!0},order:1,css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4"}}]}}},r={args:{config:{fields:[{label:"Password",field:"password",inputProps:{type:"password",required:!0},validation:{errorMessage:"Please provide valid password"},order:2,css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4"}}]}}},s={args:{config:{fields:[{label:"Email",field:"email",inputProps:{type:"email",required:!0},validation:{errorMessage:"Please provide valid Email!"},order:2,css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4"}}]}}},a={args:{config:{fields:[{label:"Male",field:"gender",labelPosition:"end",inputProps:{type:"radio",value:"male"},order:1},{label:"Female",field:"gender",labelPosition:"end",inputProps:{type:"radio",value:"female"},order:2}],css:{labelClass:"form-check-label",inputClass:"form-check-input",containerClass:"form-check mt-4"}}}},l={args:{config:{fields:[{label:"Accept terms and condition",field:"toc",labelPosition:"end",defaultValue:!1,inputProps:{type:"checkbox"},order:1}],css:{labelClass:"form-check-label",inputClass:"form-check-input",containerClass:"form-check mt-4"}}}},o={args:{config:{fields:[{label:"Website",field:"url",order:1,inputProps:{type:"url",pattern:"^(http://|https://)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$"},validation:{errorMessage:"Please enter correct url!"},css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4"}}]}}},t={args:{config:{fields:[{label:"Language",field:"lang",order:1,inputProps:{type:"dropdown",options:[{label:"Select One",field:""},{label:"Hindi",value:"Hindi"},{label:"English",value:"English"}],selected:""},css:{inputClass:"form-select",labelClass:"form-label"}}]}}},i={args:{config:{fields:[{label:"Choose Color",field:"color",order:1,inputProps:{type:"color"},css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4"}}]}}},c={args:{config:{fields:[{label:"Delivery Date",field:"deliveryDate",order:2,inputProps:{type:"date"},css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4"}}]}}},d={args:{config:{fields:[{label:"Pickup Time",field:"pickupTime",order:1,inputProps:{type:"time",min:"09:00",max:"18:00"},validation:{errorMessage:"Please provide correct time!"},css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4"}}]}}},p={args:{config:{fields:[{label:"Volume",field:"vol",defaultValue:40,order:1,inputProps:{type:"range",min:20,max:80,step:10},css:{labelClass:"form-label m-2",containerClass:"mt-4 d-flex align-items-center"}}]}}};var m,f,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(f=e.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var b,g,C;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    config: {
      fields: [{
        label: "Age",
        field: "age",
        inputProps: {
          type: "number",
          required: true
        },
        order: 1,
        css: {
          labelClass: 'form-label',
          inputClass: 'form-control',
          containerClass: 'mt-4'
        }
      }]
    }
  }
}`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var P,v,y;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,k,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var S,x,M;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(M=(x=a.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var E,F,T;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    config: {
      fields: [{
        label: 'Accept terms and condition',
        field: 'toc',
        labelPosition: 'end',
        defaultValue: false,
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
}`,...(T=(F=l.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var q,z,A;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(z=o.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var D,N,V;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(V=(N=t.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var H,R,Z;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    config: {
      fields: [{
        label: 'Choose Color',
        field: 'color',
        order: 1,
        inputProps: {
          type: 'color'
        },
        css: {
          labelClass: 'form-label',
          inputClass: 'form-control',
          containerClass: 'mt-4'
        }
      }]
    }
  }
}`,...(Z=(R=i.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};var O,_,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    config: {
      fields: [{
        label: 'Delivery Date',
        field: 'deliveryDate',
        order: 2,
        inputProps: {
          type: 'date'
        },
        css: {
          labelClass: 'form-label',
          inputClass: 'form-control',
          containerClass: 'mt-4'
        }
      }]
    }
  }
}`,...(L=(_=c.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var U,W,$;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    config: {
      fields: [{
        label: 'Pickup Time',
        field: 'pickupTime',
        order: 1,
        inputProps: {
          type: 'time',
          min: "09:00",
          max: "18:00"
        },
        validation: {
          errorMessage: 'Please provide correct time!'
        },
        css: {
          labelClass: 'form-label',
          inputClass: 'form-control',
          containerClass: 'mt-4'
        }
      }]
    }
  }
}`,...($=(W=d.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var j,B,G;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    config: {
      fields: [{
        label: 'Volume',
        field: 'vol',
        defaultValue: 40,
        order: 1,
        inputProps: {
          type: 'range',
          min: 20,
          max: 80,
          step: 10
        },
        css: {
          labelClass: 'form-label m-2',
          containerClass: 'mt-4 d-flex align-items-center'
        }
      }]
    }
  }
}`,...(G=(B=p.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const ee=["Text","Number","Password","Email","Radio","Checkbox","Url","Select","Color","Date","Time","Range"];export{l as Checkbox,i as Color,c as Date,s as Email,n as Number,r as Password,a as Radio,p as Range,t as Select,e as Text,d as Time,o as Url,ee as __namedExportsOrder,Y as default};
