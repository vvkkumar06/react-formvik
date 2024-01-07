import{r as _}from"./index-76fb7be0.js";import{p as P}from"./index-9d475cdf.js";var N={exports:{}},F={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=_,E=Symbol.for("react.element"),q=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,S=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function w(l,e,s){var r,i={},t=null,a=null;s!==void 0&&(t=""+s),e.key!==void 0&&(t=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)g.call(e,r)&&!R.hasOwnProperty(r)&&(i[r]=e[r]);if(l&&l.defaultProps)for(r in e=l.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:E,type:l,key:t,ref:a,props:i,_owner:S.current}}F.Fragment=q;F.jsx=w;F.jsxs=w;N.exports=F;var j=N.exports;const c=j.jsx,O=j.jsxs,V=({formName:l,config:e,formState:s,formCss:r,setFormState:i})=>{var C;const t=e.css||{},a=r||{},n=t.labelClass??a.labelClass,p=t.inputClass??a.inputClass,o=t.containerClass??a.containerClass,m=t.errorClass??a.errorClass,y=`rqf-${l}-${e.field}`,v=({target:b})=>{var u;d(b,((u=e.inputProps)==null?void 0:u.type)==="checkbox")},d=(b,u)=>i({...s,[e.field]:u?b.checked:b.value,_isValidField:{...s._isValidField,[e.field]:b.checkValidity()}}),f=()=>c("label",{htmlFor:y,className:n,children:e.label}),h=()=>{var b;return e.inputProps.type==="dropdown"?c("select",{value:s[e.field],id:y,onChange:v,name:e.field,className:p,children:(b=e.inputProps.options)==null?void 0:b.map(u=>c("option",{value:u.value,...e.inputProps.selected===u.value?{selected:!0}:{selected:!1},children:u.label},u.value))}):c("input",{value:s[e.field],...e.inputProps,id:y,onChange:v,name:e.field,checked:e.inputProps.type!=="radio"?s[e.field]:s[e.field]===e.inputProps.value,className:p})};return O("div",{className:`rqf-el ${o}`,children:[(!e.labelPosition||e.labelPosition==="start")&&f(),h(),e.labelPosition==="end"&&f(),s._isValidField[e.field]!==void 0&&!s._isValidField[e.field]&&c("div",{className:`invalid-feedback d-flex ${m}`,children:(C=e.validation)==null?void 0:C.errorMessage})]})};V.__docgenInfo={description:"",methods:[],displayName:"FormField"};const $=l=>{const e={};return l.forEach(s=>{var r;e[s.field]=s.defaultValue??"",e._isValidField||(e._isValidField={}),(r=s.inputProps)!=null&&r.required&&(e._isValidField[s.field]=void 0)}),e},L=(l,e)=>{var n,p;const s={};(n=l.fields)==null||n.forEach(o=>{s[o.field+o.order]=o});const r={};(p=e.fields)==null||p.forEach(o=>{r[o.field+o.order]=o});const i={...s,...r},t=Object.values(i),a={};return t.forEach(o=>{a[o.order]=o}),Object.values(a)},I=(l,e)=>{var t,a;const s={};(t=l.actions)==null||t.map(n=>{s[n.type]=n});const r={};(a=e.actions)==null||a.map(n=>{r[n.type]=n});const i={...s,...r};return Object.values(i)},T={fields:[{label:"Username",field:"username",inputProps:{type:"text"},order:10},{label:"Password",field:"password",inputProps:{type:"password"},order:20}],actions:[{label:"Login",type:"submit",css:{buttonClass:"btn btn-primary ml-auto",containerClass:"mt-4 d-flex justify-content-end"}}],css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4",formContainerClass:"row"}},A={fields:[{label:"First Name",field:"firstName",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please provide valid First Name"},order:10},{label:"Last Name",field:"lastName",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please provide valid Last Name"},order:20},{label:"Email Address",field:"email",inputProps:{type:"email"},order:30},{label:"Phone Number",field:"phone",inputProps:{type:"phone"},order:40},{label:"Website",field:"website",inputProps:{type:"url"},order:50},{label:"Gender",field:"gen",order:60,inputProps:{type:"dropdown",options:[{label:"Select One",field:""},{label:"Male",value:"male"},{label:"Female",value:"female"}],selected:"male"},css:{inputClass:"form-select"}},{label:"Password",field:"password",inputProps:{type:"password"},order:80},{label:"Confirm Password",field:"confirmPassword",inputProps:{type:"password"},order:90},{label:"Creating an account means you'are okay with our Terms and Conditions and our Privacy Policiy",field:"toc",labelPosition:"end",inputProps:{type:"checkbox"},css:{inputClass:"w-10 mt-1",labelClass:"fw-lighter fst-italic mx-2",containerClass:"d-flex align-items-start mt-4"},order:100}],actions:[{label:"Register",type:"submit",css:{buttonClass:"btn btn-primary ml-auto",containerClass:"mt-4 d-flex justify-content-end"}}],css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4 col-6",formContainerClass:"row"}},B=Object.freeze(Object.defineProperty({__proto__:null,login:T,register:A},Symbol.toStringTag,{value:"Module"})),x=({name:l,config:e,onSubmit:s,preset:r,onChange:i})=>{!l&&r&&(l=r.charAt(0).toUpperCase()+r.slice(1));const t=B[r]||{},a=L(t,e),n=I(t,e),p={...t.css,...e.css},o=()=>$(a),[m,y]=_.useState(o()),v=({type:d})=>{switch(d){case"submit":const f=structuredClone(m);delete f._isValidField,s&&s(f);break;case"reset":y(o());break}};return _.useEffect(()=>{i&&i(m)},[m]),O("form",{noValidate:!0,className:p.formClass,children:[c("header",{className:"rqf-header",children:c("h1",{children:l})}),c("main",{className:`rqf-main ${p.formContainerClass}`,children:a.map(d=>c(V,{formName:l,config:d,formState:m,formCss:p,setFormState:y},`field-${d.label}`))}),c("footer",{className:"rqf-footer",children:n.map(d=>{var f,h;return c("div",{className:`rqf-action ${(f=d.css)==null?void 0:f.containerClass}`,children:c("button",{onClick:C=>{C.preventDefault(),C.stopPropagation(),v(d)},className:(h=d.css)==null?void 0:h.buttonClass,disabled:Object.values(m._isValidField).includes(void 0)||Object.values(m._isValidField).includes(!1),children:d.label})},`action-${d.label}`)})})]})};x.propTypes={name:P.string,preset:P.string,config:P.object,onSubmit:P.func};x.defaultProps={name:"",config:{},preset:"",onSubmit:void 0};x.__docgenInfo={description:"Form component for generating dynamic forms",methods:[],displayName:"Form",props:{name:{defaultValue:{value:'""',computed:!1},description:"Name of the form, shows at the top e.g. Login, Register, Contact, etc.",type:{name:"string"},required:!1},config:{defaultValue:{value:"{}",computed:!1},description:"Custom form configuration",type:{name:"object"},required:!1},preset:{defaultValue:{value:'""',computed:!1},description:"Initial form configuration",type:{name:"string"},required:!1},onSubmit:{defaultValue:{value:"undefined",computed:!0},description:"Submit handler method",type:{name:"func"},required:!1}}};export{x as F};