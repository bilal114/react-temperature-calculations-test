(this["webpackJsonppayoneer-assignment"]=this["webpackJsonppayoneer-assignment"]||[]).push([[0],{100:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),o=(n(99),n(18)),u=(n(100),n(6));var s=function(){return Object(u.jsx)("main",{className:"loader-container",children:Object(u.jsx)("div",{role:"alert","aria-busy":"true","aria-label":"Loading",children:"Loading..."})})},l=n(36),d=n(9),j=n(13),b=n(60),v=n.n(b),f="fahrenheit",p="celcius",h=2,O=3,m=460,x=1136,g=function(e){var t=[],n={},a=[],r="";for(var c in e){var i,o;if(y(e[c].dt_txt)!=y(r)){var u=_(a,r,t,n);t=u.cardsData,n=u.barChartData,a=[]}a.push({temp:null===(i=e[c])||void 0===i||null===(o=i.main)||void 0===o?void 0:o.temp,time:E(e[c].dt_txt,"HH:mm")}),r=e[c].dt_txt}var s=_(a,r,t,n);return{cardsData:t=s.cardsData,barChartData:n=s.barChartData}};function _(e,t,n,a){if((null===e||void 0===e?void 0:e.length)>0){var r=e.reduce((function(e,t){return e+(null===t||void 0===t?void 0:t.temp)}),0)/(null===e||void 0===e?void 0:e.length);n.push({date:y(t),avg_temp:r})}return(null===e||void 0===e?void 0:e.length)>0&&(a[y(t)]=e),{cardsData:n,barChartData:a}}var y=function(e){return v()(e).format("DD MMM YY")},E=function(e,t){return v()(e).format(t)},D=function(e,t){return t===f?"".concat(Math.round(w(e)),"\u2109"):"".concat(Math.round(k(e)),"&#8451;")},T=function(e,t){return t===f?Math.round(w(e)):Math.round(k(e))},w=function(e){return 1.8*(e-273.15)+32},k=function(e){return e-273.15},S=n(157);var C=function(e){var t,n,r=Object(j.d)((function(e){var t,n;return null===(t=e.weather)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.cardsData}),j.b),c=Object(j.d)((function(e){var t;return null===(t=e.weather)||void 0===t?void 0:t.selected_index})),i=Object(j.d)((function(e){var t;return null===(t=e.weather)||void 0===t?void 0:t.temp_unit})),s=!!r&&(null===(t=r[c])||void 0===t?void 0:t.date),b=Object(a.useState)([]),v=Object(o.a)(b,2),f=v[0],h=v[1];s&&(n=e.data[s]),Object(a.useEffect)((function(){n&&h(function(e,t){var n=[];for(var a in e){var r,c,i;n.push({temp:T(null===(r=e[a])||void 0===r?void 0:r.temp,t),time:"".concat(null===(c=e[a])||void 0===c?void 0:c.time," - ").concat(T(null===(i=e[a])||void 0===i?void 0:i.temp,t)).concat(t===p?"\u2103":"\u2109")})}return n}(n,i))}),[i,c]);var O=Object(S.a)({chartRoot:{maxHeight:200,marginTop:"15%"}})();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(l.c,{data:f,className:O.chartRoot,children:[Object(u.jsx)(l.a,{labelComponent:function(e){return Object(u.jsx)(l.a.Label,{text:e.text.split("-")[1],x:e.x,y:e.y})}}),Object(u.jsx)(l.d,{max:8,showLabels:!1}),Object(u.jsx)(l.b,{name:"test",valueField:"temp",argumentField:"time"}),Object(u.jsx)(d.a,{})]})})},M=n(168),A=n(158),z=n(165),L=n(159),I=n(129),F=n(160),N=n(162),P=n(161),R=n(83),G=n.n(R),H=n(22),W=n.n(H),B=n(49),q="GET_WEATHER_DATA_SUCCESS",U="GET_WEATHER_DATA_LOAD",J="GET_WEATHER_DATA_ERR",Y="SET_TEMP_UNIT",X="SET_PAGE_SIZE",Z="SET_SELECTED_INDEX",K=n(82),Q=n.n(K),V=function(e){var t=Q.a.create({baseURL:"https://api.openweathermap.org",headers:{"Content-Type":"application/json",Accept:"application/json"}}),n=function(){var e=Object(B.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.response){e.next=6;break}return 401===t.response.status||t.response.status,t.response.status,e.abrupt("return",Promise.reject(t.response.data?t.response.data:t.response||t.message));case 6:if(!t.request){e.next=10;break}return e.abrupt("return",Promise.reject(t.request));case 10:return e.abrupt("return",Promise.reject(t.message));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t(e).then((function(e){return e.data})).catch(n)},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return V({url:"/data/2.5/forecast".concat(e),method:"GET"})},ee=function(e){return[200,"200"].includes(null===e||void 0===e?void 0:e.cod)},te=function(e){return"object"===typeof e&&"function"!==typeof e&&null!=e},ne=function(){return!!document&&ce()<=m},ae=function(){return!!document&&(ce()>m&&ce()<=x)},re=function(){return!!document&&ce()>x},ce=function(){return(document.body||document.documentElement).clientWidth},ie=function(e,t){var n,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=r;if(a||0===e?n=Array.from({length:t},(function(t,n){return n+e})):0!=e&&(n=Array.from({length:t},(function(t,n){return e-n}))),0===e)return n;if(a){if(e%t===0&&t===h||e%t===0&&t!==h)return n}else if((e+1)%t===0&&t===h||(e+1)%t===0&&t!==h)return n;return c},oe=function(e){return{type:Z,selected_index:e}},ue=function(e){return{type:X,page_size:e}},se=n(61),le=n.n(se),de=n(164),je=n(5);function be(){var e=Object(a.useState)({isMobile:!1,isTablet:!1,isDesktop:!1}),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){r({isMobile:ne(),isTablet:ae(),isDesktop:re()}),window.addEventListener("resize",(function(){var e={isMobile:ne(),isTablet:ae(),isDesktop:re()};(function(e,t){var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(var r=0,c=n;r<c.length;r++){var i=c[r];if(e[i]!==t[i])return!1}return!0})(n,e)||r(e)}))}),[]),n}var ve=function(e){var t,n=Object(j.d)((function(e){var t;return null===(t=e.weather)||void 0===t?void 0:t.temp_unit})),r=Object(j.d)((function(e){var t;return null===(t=e.weather)||void 0===t?void 0:t.selected_index})),c=Object(j.d)((function(e){var t,n;return null===(t=e.weather)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.cardsData}),j.b),i=Object(j.d)((function(e){var t;return null===(t=e.weather)||void 0===t?void 0:t.page_size})),s=Object(a.useState)([]),l=Object(o.a)(s,2),d=l[0],b=l[1],v=Object(j.c)(),f=be(),p=f.isMobile,h=f.isTablet,O=f.isDesktop,m=Object(S.a)({root:{maxWidth:"100vw"},radio:{marginTop:"2%"},rotate:{transform:"rotate(180deg)"},arrowIcon:{fontSize:60},cardBorder:{border:"2px solid black"}});Object(a.useEffect)((function(){b(ie(r,i,d))}),[p,h,O]);var x=m();return(null===e||void 0===e?void 0:e.data)&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(M.a,{"aria-label":"temperature unit selector",name:"temperature",value:n,onChange:function(e){var t;v((t=e.target.value,{type:Y,temp_unit:t}))},children:Object(u.jsxs)(de.a,{display:"flex",px:p?4:10,py:p?1:3,children:[Object(u.jsx)(de.a,{flexGrow:1,children:Object(u.jsx)(A.a,{value:"celcius",control:Object(u.jsx)(z.a,{color:"primary"}),label:"Celcius"})}),Object(u.jsx)(de.a,{children:Object(u.jsx)(A.a,{value:"fahrenheit",control:Object(u.jsx)(z.a,{color:"primary"}),label:"Fahrenheit"})})]})}),Object(u.jsxs)(de.a,{display:"flex",px:p?1:8,children:[Object(u.jsx)(de.a,{flexGrow:1,children:r>0&&Object(u.jsx)(le.a,{onClick:function(){v(oe(r-1)),b(ie(r-1,i,!1,d))},color:"primary",className:Object(je.a)(x.rotate,x.arrowIcon)})}),Object(u.jsx)(de.a,{children:(null===(t=c[r+1])||void 0===t?void 0:t.date)&&Object(u.jsx)(le.a,{onClick:function(){v(oe(r+1)),b(ie(r+1,i,!0,d))},color:"primary",className:x.arrowIcon})})]}),Object(u.jsx)(L.a,{container:!0,spacing:2,justify:"center",className:x.root,children:e.data.map((function(e,t){return d.includes(t)?Object(u.jsx)(L.a,{item:!0,children:Object(u.jsxs)(F.a,{className:Object(je.a)(r===t&&x.cardBorder),children:[Object(u.jsxs)(P.a,{children:[Object(u.jsxs)(I.a,{variant:"body2",component:"p",children:["Temp: ",Object(u.jsx)("span",{dangerouslySetInnerHTML:{__html:D(e.avg_temp,n)}})]}),Object(u.jsxs)(I.a,{variant:"body2",component:"p",children:["Date: ",e.date]})]}),Object(u.jsx)(N.a,{children:Object(u.jsx)(G.a,{})})]})},e.date):null}))})]})||null},fe=n(163);var pe=function(){var e,t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(j.d)((function(e){return e.weather}),j.b),l=Object(j.c)();Object(a.useEffect)((function(){var e;l((e=function(e){if(!te(e))return"";var t=[];return e&&Object.keys(e).length>0&&Object.entries(e).forEach((function(e){var n=Object(o.a)(e,2),a=n[0],r=n[1];r&&t.push("".concat(a,"=").concat(r))})),t.length>0&&"?".concat(t.join("&"))}({q:"Munich,de",APPID:"75f972b80e26f14fe6c920aa6a85ad57",cnt:40}),function(){var t=Object(B.a)(W.a.mark((function t(n){var a,r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:U,data:[]}),t.prev=1,t.next=4,$(e);case 4:a=t.sent,ee(a)&&(r=g(a.list),n({type:q,data:r,message:"Success"})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:J,data:t.t0,message:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[]),Object(a.useEffect)((function(){i.type===q&&c(!0)}),[i.type]);var d=be(),b=d.isMobile,v=d.isTablet,f=d.isDesktop;Object(a.useEffect)((function(){b&&(null===i||void 0===i?void 0:i.page_size)!==h&&l(ue(h))}),[b,null===i||void 0===i?void 0:i.page_size,v,f]);var p=Object(S.a)({container:{maxWidth:b?"350px":"600px",margin:"0 auto"}})();return Object(a.useEffect)((function(){(f||v)&&(null===i||void 0===i?void 0:i.page_size)!==O&&l(ue(O))}),[b,null===i||void 0===i?void 0:i.page_size,v,f]),console.log(i),r&&(null===i||void 0===i||null===(e=i.data)||void 0===e?void 0:e.cardsData)?Object(u.jsxs)(fe.a,{className:p.container,children:[Object(u.jsx)(ve,{data:i.data.cardsData}),Object(u.jsx)(C,{data:i.data.barChartData})]}):Object(u.jsx)(s,{})};var he,Oe,me=function(){return Object(u.jsx)(pe,{})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,170)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},ge=n(25),_e=n(84),ye=n(23),Ee=n(86),De={type:null,data:null,message:null,temp_unit:f,selected_index:0,page_size:h},Te=Object(ge.combineReducers)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0,n=t.data,a=t.type,r=t.message,c=Object(Ee.a)(t,["data","type","message"]);switch(a){case q:case U:case J:return Object(ye.a)(Object(ye.a)({},e),{},{data:n,type:a,message:r});case Y:return Object(ye.a)(Object(ye.a)({},e),{},{temp_unit:c.temp_unit});case X:return Object(ye.a)(Object(ye.a)({},e),{},{page_size:c.page_size});case Z:return Object(ye.a)(Object(ye.a)({},e),{},{selected_index:c.selected_index});default:return e}}}),we=n(85);var ke=null!==(he=Oe)&&void 0!==he?he:Oe=Object(ge.createStore)(Te,{},Object(_e.composeWithDevTools)(Object(ge.applyMiddleware)(we.a)));i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(j.a,{store:ke,children:Object(u.jsx)(me,{})})}),document.getElementById("root")),xe()},99:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.951c22b2.chunk.js.map