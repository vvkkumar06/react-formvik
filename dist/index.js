"use strict";var e,r,t,a,n=require("react"),o=require("react/jsx-runtime"),s={exports:{}};function i(){if(r)return e;r=1;return e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}var l,u={exports:{}},c={};var p,f,d,m,y,b,v,P,g,h,C={};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function w(){return f||(f=1,"production"===process.env.NODE_ENV?u.exports=function(){if(p)return C;p=1;var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,n=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,i=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,c=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,P=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function h(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case r:switch(e=e.type){case l:case u:case a:case o:case n:case f:return e;default:switch(e=e&&e.$$typeof){case i:case c:case y:case m:case s:return e;default:return p}}case t:return p}}}function w(e){return h(e)===u}return C.AsyncMode=l,C.ConcurrentMode=u,C.ContextConsumer=i,C.ContextProvider=s,C.Element=r,C.ForwardRef=c,C.Fragment=a,C.Lazy=y,C.Memo=m,C.Portal=t,C.Profiler=o,C.StrictMode=n,C.Suspense=f,C.isAsyncMode=function(e){return w(e)||h(e)===l},C.isConcurrentMode=w,C.isContextConsumer=function(e){return h(e)===i},C.isContextProvider=function(e){return h(e)===s},C.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},C.isForwardRef=function(e){return h(e)===c},C.isFragment=function(e){return h(e)===a},C.isLazy=function(e){return h(e)===y},C.isMemo=function(e){return h(e)===m},C.isPortal=function(e){return h(e)===t},C.isProfiler=function(e){return h(e)===o},C.isStrictMode=function(e){return h(e)===n},C.isSuspense=function(e){return h(e)===f},C.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===u||e===o||e===n||e===f||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===s||e.$$typeof===i||e.$$typeof===c||e.$$typeof===v||e.$$typeof===P||e.$$typeof===g||e.$$typeof===b)},C.typeOf=h,C}():u.exports=(l||(l=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,n=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,i=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,P=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function h(e){if("object"==typeof e&&null!==e){var c=e.$$typeof;switch(c){case r:var d=e.type;switch(d){case l:case u:case a:case o:case n:case f:return d;default:var b=d&&d.$$typeof;switch(b){case i:case p:case y:case m:case s:return b;default:return c}}case t:return c}}}var C=l,w=u,x=i,S=s,N=r,j=p,O=a,E=y,q=m,M=t,$=o,k=n,T=f,_=!1;function F(e){return h(e)===u}c.AsyncMode=C,c.ConcurrentMode=w,c.ContextConsumer=x,c.ContextProvider=S,c.Element=N,c.ForwardRef=j,c.Fragment=O,c.Lazy=E,c.Memo=q,c.Portal=M,c.Profiler=$,c.StrictMode=k,c.Suspense=T,c.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),F(e)||h(e)===l},c.isConcurrentMode=F,c.isContextConsumer=function(e){return h(e)===i},c.isContextProvider=function(e){return h(e)===s},c.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},c.isForwardRef=function(e){return h(e)===p},c.isFragment=function(e){return h(e)===a},c.isLazy=function(e){return h(e)===y},c.isMemo=function(e){return h(e)===m},c.isPortal=function(e){return h(e)===t},c.isProfiler=function(e){return h(e)===o},c.isStrictMode=function(e){return h(e)===n},c.isSuspense=function(e){return h(e)===f},c.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===u||e===o||e===n||e===f||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===s||e.$$typeof===i||e.$$typeof===p||e.$$typeof===v||e.$$typeof===P||e.$$typeof===g||e.$$typeof===b)},c.typeOf=h}()),c)),u.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function x(){if(m)return d;m=1;var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;return d=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(a,n){for(var o,s,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(a),l=1;l<arguments.length;l++){for(var u in o=Object(arguments[l]))r.call(o,u)&&(i[u]=o[u]);if(e){s=e(o);for(var c=0;c<s.length;c++)t.call(o,s[c])&&(i[s[c]]=o[s[c]])}}return i},d}function S(){return b?y:(b=1,y=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var N=w();s.exports=function(){if(h)return g;h=1;var e=w(),r=x(),t=i(),a=S(),n=function(){if(P)return v;P=1;var e=function(){};if("production"!==process.env.NODE_ENV){var r=i(),t={},a=S();e=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function n(n,o,s,i,l){if("production"!==process.env.NODE_ENV)for(var u in n)if(a(n,u)){var c;try{if("function"!=typeof n[u]){var p=Error((i||"React class")+": "+s+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof n[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}c=n[u](o,u,i,s,null,r)}catch(e){c=e}if(!c||c instanceof Error||e((i||"React class")+": type specification of "+s+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in t)){t[c.message]=!0;var f=l?l():"";e("Failed "+s+" type: "+c.message+(null!=f?f:""))}}}return n.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(t={})},v=n}(),o=function(){};function s(){return null}return"production"!==process.env.NODE_ENV&&(o=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),g=function(i,l){var u="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",p="<<anonymous>>",f={array:b("array"),bigint:b("bigint"),bool:b("boolean"),func:b("function"),number:b("number"),object:b("object"),string:b("string"),symbol:b("symbol"),any:y(s),arrayOf:function(e){return y((function(r,a,n,o,s){if("function"!=typeof e)return new m("Property `"+s+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var i=r[a];if(!Array.isArray(i))return new m("Invalid "+o+" `"+s+"` of type `"+g(i)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<i.length;l++){var u=e(i,l,n,o,s+"["+l+"]",t);if(u instanceof Error)return u}return null}))},element:y((function(e,r,t,a,n){var o=e[r];return i(o)?null:new m("Invalid "+a+" `"+n+"` of type `"+g(o)+"` supplied to `"+t+"`, expected a single ReactElement.")})),elementType:y((function(r,t,a,n,o){var s=r[t];return e.isValidElementType(s)?null:new m("Invalid "+n+" `"+o+"` of type `"+g(s)+"` supplied to `"+a+"`, expected a single ReactElement type.")})),instanceOf:function(e){return y((function(r,t,a,n,o){if(!(r[t]instanceof e)){var s=e.name||p;return new m("Invalid "+n+" `"+o+"` of type `"+((i=r[t]).constructor&&i.constructor.name?i.constructor.name:p)+"` supplied to `"+a+"`, expected instance of `"+s+"`.")}var i;return null}))},node:y((function(e,r,t,a,n){return P(e[r])?null:new m("Invalid "+a+" `"+n+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(r,n,o,s,i){if("function"!=typeof e)return new m("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=r[n],u=g(l);if("object"!==u)return new m("Invalid "+s+" `"+i+"` of type `"+u+"` supplied to `"+o+"`, expected an object.");for(var c in l)if(a(l,c)){var p=e(l,c,o,s,i+"."+c,t);if(p instanceof Error)return p}return null}))},oneOf:function(e){return Array.isArray(e)?y((function(r,t,a,n,o){for(var s=r[t],i=0;i<e.length;i++)if(d(s,e[i]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===h(r)?String(r):r}));return new m("Invalid "+n+" `"+o+"` of value `"+String(s)+"` supplied to `"+a+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),s)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&o("Invalid argument supplied to oneOfType, expected an instance of array."),s;for(var r=0;r<e.length;r++){var n=e[r];if("function"!=typeof n)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+C(n)+" at index "+r+"."),s}return y((function(r,n,o,s,i){for(var l=[],u=0;u<e.length;u++){var c=(0,e[u])(r,n,o,s,i,t);if(null==c)return null;c.data&&a(c.data,"expectedType")&&l.push(c.data.expectedType)}return new m("Invalid "+s+" `"+i+"` supplied to `"+o+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return y((function(r,a,n,o,s){var i=r[a],l=g(i);if("object"!==l)return new m("Invalid "+o+" `"+s+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var u in e){var c=e[u];if("function"!=typeof c)return v(n,o,s,u,h(c));var p=c(i,u,n,o,s+"."+u,t);if(p)return p}return null}))},exact:function(e){return y((function(n,o,s,i,l){var u=n[o],c=g(u);if("object"!==c)return new m("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+s+"`, expected `object`.");var p=r({},n[o],e);for(var f in p){var d=e[f];if(a(e,f)&&"function"!=typeof d)return v(s,i,l,f,h(d));if(!d)return new m("Invalid "+i+" `"+l+"` key `"+f+"` supplied to `"+s+"`.\nBad object: "+JSON.stringify(n[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(u,f,s,i,l+"."+f,t);if(y)return y}return null}))}};function d(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function m(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function y(e){if("production"!==process.env.NODE_ENV)var r={},a=0;function n(n,s,i,u,c,f,d){if(u=u||p,f=f||i,d!==t){if(l){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var b=u+":"+i;!r[b]&&a<3&&(o("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[b]=!0,a++)}}return null==s[i]?n?null===s[i]?new m("The "+c+" `"+f+"` is marked as required in `"+u+"`, but its value is `null`."):new m("The "+c+" `"+f+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(s,i,u,c,f)}var s=n.bind(null,!1);return s.isRequired=n.bind(null,!0),s}function b(e){return y((function(r,t,a,n,o,s){var i=r[t];return g(i)!==e?new m("Invalid "+n+" `"+o+"` of type `"+h(i)+"` supplied to `"+a+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,r,t,a,n){return new m((e||"React class")+": "+r+" type `"+t+"."+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+n+"`.")}function P(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(P);if(null===e||i(e))return!0;var r=function(e){var r=e&&(u&&e[u]||e[c]);if("function"==typeof r)return r}(e);if(!r)return!1;var t,a=r.call(e);if(r!==e.entries){for(;!(t=a.next()).done;)if(!P(t.value))return!1}else for(;!(t=a.next()).done;){var n=t.value;if(n&&!P(n[1]))return!1}return!0;default:return!1}}function g(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function h(e){if(null==e)return""+e;var r=g(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function C(e){var r=h(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return m.prototype=Error.prototype,f.checkPropTypes=n,f.resetWarningCache=n.resetWarningCache,f.PropTypes=f,f},g}()(N.isElement,!0)}else s.exports=function(){if(a)return t;a=1;var e=i();function r(){}function n(){}return n.resetWarningCache=r,t=function(){function t(r,t,a,n,o,s){if(s!==e){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function a(){return t}t.isRequired=t;var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:a,element:t,elementType:t,instanceOf:a,node:t,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:r};return o.PropTypes=o,o}}()();var j=s.exports;const O=({formName:e,config:r,formState:t,formCss:a,setFormState:n})=>{const s=r.css||{},i=a||{},l=s.labelClass??i.labelClass,u=s.inputClass??i.inputClass,c=s.containerClass??i.containerClass,p=s.errorClass??i.errorClass,f=s.radioGroupClass??i.radioGroupClass,d=s.radioContainerClass??i.radioContainerClass,m=s.radioLabelClass??i.radioLabelClass,y=`rqf-${e}-${r.field}`,b=({target:e})=>{v(e,"checkbox"===r.inputProps?.type)},v=(e,a)=>n({...t,[r.field]:a?e.checked:e.value,_isValidField:{...t._isValidField,[r.field]:e.checkValidity()}}),P=(e,t)=>o.jsx("label",{htmlFor:y,className:t??l,children:e??r.label});return o.jsxs("div",{className:`rqf-el ${c}`,children:[(!r.labelPosition||"start"===r.labelPosition)&&P(),"dropdown"===r.inputProps.type?o.jsx("select",{value:t[r.field],id:y,onChange:b,name:r.field,className:u,children:r.inputProps.options?.map((e=>o.jsx("option",{value:e.value,...r.inputProps.selected===e.value?{selected:!0}:{selected:!1},children:e.label},e.value)))}):"text"===r.inputProps.type&&(r.inputProps.rows||r.inputProps.cols)?o.jsx("textarea",{...r.inputProps,id:y,onChange:b,name:r.field,className:u,children:t[r.field]}):"radio"===r.inputProps.type?o.jsx("div",{className:f,children:r.inputProps.options?.map((e=>o.jsxs("div",{className:d,children:[(!e.labelPosition||"start"===e.labelPosition)&&P(e.label,m),o.jsx("input",{value:e.value,...r.inputProps,id:y,onChange:b,name:r.field,checked:t[r.field]===e.value,className:u}),"end"===e.labelPosition&&P(e.label,m)]})))}):o.jsx("input",{value:t[r.field],...r.inputProps,id:y,onChange:b,name:r.field,checked:t[r.field],className:u}),"end"===r.labelPosition&&P(),void 0!==t._isValidField[r.field]&&!t._isValidField[r.field]&&o.jsx("div",{className:`invalid-feedback d-flex ${p}`,children:r.validation?.errorMessage})]})};var E=Object.freeze({__proto__:null,contactUs:{fields:[{label:"Full Name",field:"fullName",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please provide your full name"}},{label:"Email Address",field:"email",inputProps:{type:"email",required:!0},validation:{errorMessage:"Please provide a valid email address"}},{label:"Subject",field:"subject",inputProps:{type:"text"}},{label:"Message",field:"message",inputProps:{type:"text",rows:4}}],actions:[{label:"Submit",type:"submit",css:{buttonClass:"btn btn-primary ml-auto",containerClass:"mt-4 d-flex justify-content-end"}}],css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4 col-6",formContainerClass:"row"}},eventRegistration:{fields:[{label:"Full Name",field:"fullName",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please provide your full name"}},{label:"Email Address",field:"email",inputProps:{type:"email",required:!0},validation:{errorMessage:"Please provide a valid email address"}},{label:"Phone Number",field:"phone",inputProps:{type:"tel",required:!0},validation:{errorMessage:"Please provide a valid phone number"}},{label:"Event Name",field:"eventName",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please specify the event you are registering for"}},{label:"Number of Guests",field:"guests",inputProps:{type:"number",min:1}},{label:"Special Requests",field:"specialRequests",inputProps:{type:"text",rows:4}}],actions:[{label:"Register for Event",type:"submit",css:{buttonClass:"btn btn-primary"}}],css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4 col-6",formContainerClass:"row"}},feedback:{fields:[{label:"Your Name",field:"name",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please provide your name"}},{label:"Email Address",field:"email",inputProps:{type:"email",required:!0},validation:{errorMessage:"Please provide a valid email address"}},{label:"Feedback Type",field:"feedbackType",inputProps:{type:"dropdown",options:[{label:"Select One",field:""},{label:"General Feedback",value:"general"},{label:"Bug Report",value:"bug"},{label:"Feature Request",value:"feature"}],required:!0},validation:{errorMessage:"Please select a feedback type"}},{label:"Your Feedback",field:"feedback",inputProps:{type:"text",rows:4,required:!0},validation:{errorMessage:"Please provide your feedback"}}],actions:[{label:"Submit Feedback",type:"submit",css:{buttonClass:"btn btn-primary"}}],css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4 col-6",formContainerClass:"row"}},inquiry:{fields:[{label:"Full Name",field:"fullName",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please provide your full name"}},{label:"Email Address",field:"email",inputProps:{type:"email",required:!0},validation:{errorMessage:"Please provide a valid email address"}},{label:"Phone Number",field:"phone",inputProps:{type:"tel"}},{label:"Inquiry Type",field:"inquiryType",inputProps:{type:"dropdown",options:[{label:"Select One",field:""},{label:"Product Inquiry",value:"product"},{label:"Service Inquiry",value:"service"},{label:"General Inquiry",value:"general"}],required:!0},validation:{errorMessage:"Please select an inquiry type"}},{label:"Message",field:"message",inputProps:{type:"text",rows:4,required:!0},validation:{errorMessage:"Please provide your inquiry message"}}],actions:[{label:"Submit Inquiry",type:"submit",css:{buttonClass:"btn btn-primary"}}],css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4 col-6",formContainerClass:"row"}},jobApplication:{fields:[{label:"Full Name",field:"fullName",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please provide your full name"}},{label:"Email Address",field:"email",inputProps:{type:"email",required:!0},validation:{errorMessage:"Please provide a valid email address"}},{label:"Phone Number",field:"phone",inputProps:{type:"tel",required:!0},validation:{errorMessage:"Please provide a valid phone number"}},{label:"Applying for Position",field:"position",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please specify the position you are applying for"}},{label:"Resume/CV",field:"resume",inputProps:{type:"file",accept:".pdf, .doc, .docx",required:!0},validation:{errorMessage:"Please upload your resume in PDF or Word format"}},{label:"Cover Letter",field:"coverLetter",inputProps:{type:"text",rows:4}}],actions:[{label:"Submit Application",type:"submit",css:{buttonClass:"btn btn-primary"}}],css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4 col-6",formContainerClass:"row"}},login:{fields:[{label:"Username",field:"username",inputProps:{type:"text"}},{label:"Password",field:"password",inputProps:{type:"password"}}],actions:[{label:"Login",type:"submit",css:{buttonClass:"btn btn-primary ml-auto",containerClass:"mt-4 d-flex justify-content-end"}}],css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4",formContainerClass:"row"}},membershipRegistration:{fields:[{label:"Full Name",field:"fullName",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please provide your full name"}},{label:"Email Address",field:"email",inputProps:{type:"email",required:!0},validation:{errorMessage:"Please provide a valid email address"}},{label:"Phone Number",field:"phone",inputProps:{type:"tel"}},{label:"Address",field:"address",inputProps:{type:"text"}},{label:"Membership Type",field:"membershipType",inputProps:{type:"dropdown",options:[{label:"Select One",field:""},{label:"Basic",value:"basic"},{label:"Premium",value:"premium"},{label:"Gold",value:"gold"}],required:!0},validation:{errorMessage:"Please select a membership type"}},{label:"Payment Method",field:"paymentMethod",inputProps:{type:"radio",options:[{label:"Credit Card",value:"creditCard"},{label:"PayPal",value:"paypal"},{label:"Bank Transfer",value:"bankTransfer"}],required:!0},validation:{errorMessage:"Please select a payment method"},css:{radioLabelClass:"form-check-label",inputClass:"form-check-input",radioContainerClass:"form-check mt-4",radioGroupClass:"d-flex gap-4"}}],actions:[{label:"Join Now",type:"submit",css:{buttonClass:"btn btn-primary"}}],css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4 col-6",formContainerClass:"row"}},passwordReset:{fields:[{label:"Email Address",field:"email",inputProps:{type:"email",required:!0},validation:{errorMessage:"Please provide a valid email address"}},{label:"Username",field:"username",inputProps:{type:"text"}},{label:"New Password",field:"newPassword",inputProps:{type:"password",required:!0},validation:{errorMessage:"Password must be at least 8 characters long"}},{label:"Confirm New Password",field:"confirmNewPassword",inputProps:{type:"password",required:!0},validation:{errorMessage:"Passwords do not match"}}],actions:[{label:"Reset Password",type:"submit",css:{buttonClass:"btn btn-primary"}}],css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4 col-6",formContainerClass:"row"}},register:{fields:[{label:"First Name",field:"firstName",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please provide valid First Name"}},{label:"Last Name",field:"lastName",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please provide valid Last Name"}},{label:"Email Address",field:"email",inputProps:{type:"email"}},{label:"Phone Number",field:"phone",inputProps:{type:"phone"}},{label:"Website",field:"website",inputProps:{type:"url"}},{label:"Gender",field:"gen",inputProps:{type:"dropdown",options:[{label:"Select One",field:""},{label:"Male",value:"male"},{label:"Female",value:"female"}],selected:"male"},css:{inputClass:"form-select"}},{label:"Password",field:"password",inputProps:{type:"password"}},{label:"Confirm Password",field:"confirmPassword",inputProps:{type:"password"}},{label:"Creating an account means you'are okay with our Terms and Conditions and our Privacy Policiy",field:"toc",labelPosition:"end",inputProps:{type:"checkbox"},css:{inputClass:"w-10 mt-1",labelClass:"fw-lighter fst-italic mx-2",containerClass:"d-flex align-items-start mt-4"}}],actions:[{label:"Register",type:"submit",css:{buttonClass:"btn btn-primary ml-auto",containerClass:"mt-4 d-flex justify-content-end"}}],css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4 col-6",formContainerClass:"row"}},survey:{fields:[{label:"Your Name",field:"name",inputProps:{type:"text",required:!0},validation:{errorMessage:"Please provide your name"}},{label:"Email Address",field:"email",inputProps:{type:"email",required:!0},validation:{errorMessage:"Please provide a valid email address"}},{label:"Age",field:"age",inputProps:{type:"number",min:18,required:!0},validation:{errorMessage:"Please provide a valid age (must be 18 or older)"}},{label:"How did you hear about us?",field:"source",inputProps:{type:"text"}},{label:"Rate your satisfaction with our products/services (1-10)",field:"satisfactionRating",inputProps:{type:"number",min:1,max:10,required:!0},validation:{errorMessage:"Please provide a rating between 1 and 10"}},{label:"What improvements would you suggest?",field:"improvements",inputProps:{type:"text",rows:4}}],actions:[{label:"Submit Survey",type:"submit",css:{buttonClass:"btn btn-primary"}}],css:{labelClass:"form-label",inputClass:"form-control",containerClass:"mt-4 col-6",formContainerClass:"row"}}});const q=({name:e,config:r,onSubmit:t,preset:a,onChange:s})=>{!e&&a&&(e=a.charAt(0).toUpperCase()+a.slice(1));const i=E[a]||{},l=((e,r)=>{const t={};e.fields?.forEach((e=>{t[e.field]=e}));const a={};r.fields?.forEach((e=>{a[e.field]=e}));const n={...t,...a},o=Object.values(n);return o.forEach(((e,r)=>{if(void 0!==e.order&&e.order>0){const t=o.splice(r,1);o.splice(e.order-1,0,t[0])}})),o})(i,r),u=((e,r)=>{const t={};e.actions?.map((e=>{t[e.type]=e}));const a={};r.actions?.map((e=>{a[e.type]=e}));const n={...t,...a};return Object.values(n)})(i,r),c={...i.css,...r.css},p=()=>(e=>{const r={};return e.forEach((e=>{r[e.field]=e.defaultValue??"",r._isValidField||(r._isValidField={}),e.inputProps?.required&&(r._isValidField[e.field]=void 0)})),r})(l),[f,d]=n.useState(p());return n.useEffect((()=>{s&&s(f)}),[f]),o.jsxs("form",{noValidate:!0,className:c.formClass,children:[o.jsx("header",{className:"rqf-header",children:o.jsx("h1",{children:e})}),o.jsx("main",{className:`rqf-main ${c.formContainerClass}`,children:l.map((r=>o.jsx(O,{formName:e,config:r,formState:f,formCss:c,setFormState:d},`field-${r.label}`)))}),o.jsx("footer",{className:`rqf-footer ${c.footerClass}`,children:u.map((e=>o.jsx("div",{className:`rqf-action ${e.css?.containerClass??c.containerClass}`,children:o.jsx("button",{onClick:r=>{r.preventDefault(),r.stopPropagation(),(({type:e})=>{switch(e){case"submit":const e=structuredClone(f);delete e._isValidField,t&&t(e);break;case"reset":d(p())}})(e)},className:e.css?.buttonClass??c.buttonClass,disabled:Object.values(f._isValidField).includes(void 0)||Object.values(f._isValidField).includes(!1),children:e.label})},`action-${e.label}`)))})]})};q.propTypes={name:j.string,preset:j.string,config:j.object,onSubmit:j.func},q.defaultProps={name:"",config:{},preset:"",onSubmit:void 0},exports.Form=q,exports.FormPresets=E;
//# sourceMappingURL=index.js.map
