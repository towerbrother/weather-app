(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=a(1),m=a(4),i=function(e){var t=e.label,a=Object(m.a)(e,["label"]);return r.a.createElement("div",null,t&&r.a.createElement("label",{htmlFor:a.id},t),r.a.createElement("input",Object.assign({},a,{autoComplete:"off"})))},u=r.a.createContext(),s=function(e){var t=e.type,a=Object(n.useContext)(u),c=a.showCurrent,l=a.showForecast,o=a.handleBoxChecked;return r.a.createElement("div",{className:"checkbox"},r.a.createElement(i,{label:"Current",id:"showCurrent",className:"current",type:t,onChange:o,checked:c}),r.a.createElement(i,{label:"Forecast",id:"showForecast",className:"forecast",type:t,onChange:o,checked:l}))},d=function(e){var t=e.type,a=Object(n.useContext)(u),c=a.unitMeasure,l=a.handleRadioChecked;return r.a.createElement("div",{className:"radio"},r.a.createElement(i,{label:"Metric",id:"metric",name:"unitMeasure",value:"metric",type:t,onChange:l,checked:"metric"===c}),r.a.createElement(i,{label:"Imperial",id:"imperial",name:"unitMeasure",value:"imperial",type:t,onChange:l,checked:"imperial"===c}))},p=function(){var e=Object(n.useContext)(u),t=e.queryStringCity,a=e.queryStringCountry,c=e.showCurrent,l=e.showForecast,o=e.handleChange,m=e.handleSubmit;return r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:m},r.a.createElement("div",{className:"input-container"},r.a.createElement(i,{label:"",id:"city",type:"text",name:"queryStringCity",placeholder:"City...",onChange:o,value:t}),r.a.createElement(i,{label:"",id:"country",type:"text",name:"queryStringCountry",placeholder:"Country...",onChange:o,value:a}),r.a.createElement("button",{type:"submit",className:"button",disabled:!(c||l)||!t},"Weather")),r.a.createElement("div",{className:"boxes-container"},r.a.createElement(s,{type:"checkbox"}),r.a.createElement(d,{type:"radio"}))))},h=function(){var e,t=Object(n.useContext)(u),a=t.dataCurrent,c=t.unitMeasure,l=function(e){return Math.round(10*(e-273.15))/10},o=function(e){return Math.round(10*(1.8*e+32))/10};return r.a.createElement("div",{className:"current-weather"},(e=a.weather[0].icon,r.a.createElement("img",{id:"icon",src:"http://openweathermap.org/img/wn/".concat(e,"@2x.png"),alt:"Weather icon"})),"metric"===c?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"current-temp"},l(a.main.temp),"\xb0C"),r.a.createElement("span",{className:"current-min-temp"},"min: ",l(a.main.temp_min),"\xb0C"),r.a.createElement("span",{className:"current-max-temp"},"max: ",l(a.main.temp_max),"\xb0C")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"current-temp"},o(l(a.main.temp)),"\xb0F"),r.a.createElement("span",{className:"current-min-temp"},"min: ",o(l(a.main.temp_min)),"\xb0F"),r.a.createElement("span",{className:"current-max-temp"},"max: ",o(l(a.main.temp_max)),"\xb0F")),r.a.createElement("h4",{className:"current-description"},a.weather[0].description))},E=function(){var e=Object(n.useContext)(u),t=e.dataForecast,a=e.unitMeasure,c=function(e){return Math.round(10*(e-273.15))/10},l=t.list.filter((function(e){return e.dt_txt.slice(11,19)===t.list[39].dt_txt.slice(11,19)}));return r.a.createElement("div",{className:"forecast"},r.a.createElement("div",{className:"forecast-container"},l.map((function(e){return r.a.createElement("div",{key:e.dt,className:"forecast-item"},r.a.createElement("p",{className:"forecast-date"},e.dt_txt.slice(0,10)),(n=e.weather[0].icon,r.a.createElement("img",{id:"icon",src:"http://openweathermap.org/img/wn/".concat(n,"@2x.png"),alt:"Weather icon"})),"metric"===a?r.a.createElement("p",{className:"forecast-temp"},c(e.main.temp),"\xb0C"):r.a.createElement("p",{className:"forecast-temp"},(t=c(e.main.temp),Math.round(10*(1.8*t+32))/10),"\xb0F"),r.a.createElement("p",{className:"forecast-description"},e.weather[0].description));var t,n}))))},f=function(){var e=Object(n.useContext)(u),t=e.dataCurrent,a=e.dataForecast;return t?r.a.createElement("h1",{className:"current-title"},t.name,", ",t.sys.country):r.a.createElement("h1",{className:"forecast-title"},a.city.name,", ",a.city.country)},b=function(){var e=Object(n.useContext)(u),t=e.dataCurrent,a=e.dataForecast;return r.a.createElement("div",null,r.a.createElement(f,null),t&&a?r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(E,null)):t&&!a?r.a.createElement(h,null):r.a.createElement(E,null))},C=function(e){var t=e.err;return r.a.createElement("div",{className:"error"},r.a.createElement("p",null,"".concat(t.status," - ").concat(t.statusText)),404===t.status?r.a.createElement("p",null,"Not valid input"):401===t.status?r.a.createElement("p",null,"Not valid API key"):r.a.createElement("p",null,"Too many API calls. Try again later."))},y=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("img",{alt:"loader gif",className:"loader-image",src:"/loader.gif"}))},v=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h5",{className:"createdBy__text"},"Created by"," ",r.a.createElement("a",{className:"createdBy__link",href:"",target:"_blank",rel:"noopener noreferrer"},"Giorgio Torre")))},g="f9b82988a14039290e02b95f5e395184",N=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),m=Object(o.a)(l,2),i=m[0],s=m[1],d=Object(n.useState)(null),h=Object(o.a)(d,2),E=h[0],f=h[1],N=Object(n.useState)(null),w=Object(o.a)(N,2),j=w[0],x=w[1],O=Object(n.useState)("metric"),S=Object(o.a)(O,2),k=S[0],F=S[1],_=Object(n.useState)(""),M=Object(o.a)(_,2),q=M[0],P=M[1],I=Object(n.useState)(""),A=Object(o.a)(I,2),B=A[0],T=A[1],D=Object(n.useState)(!0),W=Object(o.a)(D,2),J=W[0],R=W[1],G=Object(n.useState)(!1),z=Object(o.a)(G,2),H=z[0],K=z[1];return r.a.createElement(u.Provider,{value:{dataCurrent:E,dataForecast:j,queryStringCity:q,queryStringCountry:B,showCurrent:J,showForecast:H,unitMeasure:k,handleChange:function(e){T("");var t=e.target.name;"queryStringCity"===t&&P(e.target.value),"queryStringCountry"===t&&T(e.target.value)},handleSubmit:function(e){e.preventDefault(),c(null),f(null),x(null),s(J+H),J&&fetch("".concat(window.location.protocol,"//api.openweathermap.org/data/2.5/weather?q=").concat(q,",").concat(B,"&APPID=").concat(g)).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(e){f(e),s(!1)})).catch((function(e){c(e),s(i-1)})),H&&fetch("".concat(window.location.protocol,"//api.openweathermap.org/data/2.5/forecast?q=").concat(q,",").concat(B,"&APPID=").concat(g)).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(e){x(e),s(!1)})).catch((function(e){c(e),s(i-1)}))},handleBoxChecked:function(e){var t=e.target.id;"showCurrent"===t&&R(!J),"showForecast"===t&&K(!H)},handleRadioChecked:function(e){F(e.target.value)}}},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"content-container"},r.a.createElement(p,null),a&&r.a.createElement(C,{err:a}),i?r.a.createElement(y,null):(E||j)&&r.a.createElement(b,null)),r.a.createElement(v,null)))};a(10),a(11);l.a.render(r.a.createElement(N,null),document.getElementById("root"))},5:function(e,t,a){e.exports=a(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.bc861126.chunk.js.map