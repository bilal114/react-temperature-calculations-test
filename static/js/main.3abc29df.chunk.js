(this["webpackJsonppayoneer-assignment"]=this["webpackJsonppayoneer-assignment"]||[]).push([[0],{100:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),o=(n(99),n(18)),s=(n(100),n(6));var u=function(){return Object(s.jsx)("main",{className:"loader-container",children:Object(s.jsx)("div",{role:"alert","aria-busy":"true","aria-label":"Loading",children:"Loading..."})})},d=n(36),l=n(9),b=n(14),j=n(60),v=n.n(j),f="fahrenheit",p="celcius",h=2,m=3,O=460,x=1136,g=function(e){var t=[],n={},a=[],r="";for(var c in e){var i,o;if(D(e[c].dt_txt)!=D(r)){var s=_(a,r,t,n);t=s.cardsData,n=s.barChartData,a=[]}a.push({temp:null===(i=e[c])||void 0===i||null===(o=i.main)||void 0===o?void 0:o.temp,time:T(e[c].dt_txt,"HH:mm")}),r=e[c].dt_txt}var u=_(a,r,t,n);return{cardsData:t=u.cardsData,barChartData:n=u.barChartData}};function _(e,t,n,a){if((null===e||void 0===e?void 0:e.length)>0){var r=e.reduce((function(e,t){return e+(null===t||void 0===t?void 0:t.temp)}),0)/(null===e||void 0===e?void 0:e.length);n.push({date:D(t),avg_temp:r})}return(null===e||void 0===e?void 0:e.length)>0&&(a[D(t)]=e),{cardsData:n,barChartData:a}}var y=function(e,t){var n,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=r;if(a||0===e?n=Array.from({length:t},(function(t,n){return n+e})):0!=e&&(n=Array.from({length:t},(function(t,n){return e-n}))),0===e)return n;if(a){if(e%t===0&&t===h||e%t===0&&t!==h)return n}else if((e+1)%t===0&&t===h||(e+1)%t===0&&t!==h)return n;return c},E=function(e,t){var n,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n=t===f?"".concat(Math.round(w(e))).concat(a&&"\u2109"):"".concat(Math.round(k(e))).concat(a?"\u2103":""),a?n:parseInt(n)},D=function(e){return v()(e).format("DD MMM YY")},T=function(e,t){return v()(e).format(t)},w=function(e){return 1.8*(e-273.15)+32},k=function(e){return e-273.15},C={root:{maxWidth:"100vw"},radio:{marginTop:"2%"},rotate:{transform:"rotate(180deg)"},arrowIcon:{fontSize:60,cursor:"pointer"},cardBorder:{border:"2px solid black"}},S=n(157);var A=function(e){var t,n,r=Object(b.d)((function(e){var t,n;return null===(t=e.weather)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.cardsData}),b.b),c=Object(b.d)((function(e){var t;return null===(t=e.weather)||void 0===t?void 0:t.selected_index})),i=Object(b.d)((function(e){var t;return null===(t=e.weather)||void 0===t?void 0:t.temp_unit})),u=!!r&&(null===(t=r[c])||void 0===t?void 0:t.date),j=Object(a.useState)([]),v=Object(o.a)(j,2),f=v[0],h=v[1];u&&(n=e.data[u]),Object(a.useEffect)((function(){n&&h(function(e,t){var n=[];for(var a in e){var r,c,i;n.push({temp:E(null===(r=e[a])||void 0===r?void 0:r.temp,t,!1),time:"".concat(null===(c=e[a])||void 0===c?void 0:c.time," - ").concat(E(null===(i=e[a])||void 0===i?void 0:i.temp,t,!1)).concat(t===p?"\u2103":"\u2109")})}return n}(n,i))}),[i,c]);var m=Object(S.a)({chartRoot:{maxHeight:200,marginTop:"15%"}})();return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(d.c,{data:f,className:m.chartRoot,children:[Object(s.jsx)(d.a,{labelComponent:function(e){return Object(s.jsx)(d.a.Label,{"data-testid":"graph-temp-unit",text:e.text.split("-")[1],x:e.x,y:e.y})}}),Object(s.jsx)(d.d,{max:8,showLabels:!1}),Object(s.jsx)(d.b,{name:"test",valueField:"temp",argumentField:"time"}),Object(s.jsx)(l.a,{})]})})},M=n(168),z=n(158),I=n(165),L=n(159),F=n(129),N=n(160),P=n(162),R=n(161),G=n(83),W=n.n(G),H=n(22),B=n.n(H),q=n(49),U="GET_WEATHER_DATA_SUCCESS",J="GET_WEATHER_DATA_LOAD",Y="GET_WEATHER_DATA_ERR",X="SET_TEMP_UNIT",Z="SET_PAGE_SIZE",K="SET_SELECTED_INDEX",Q=n(82),V=n.n(Q),$=function(e){var t=V.a.create({baseURL:"https://api.openweathermap.org",headers:{"Content-Type":"application/json",Accept:"application/json"}}),n=function(){var e=Object(q.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.response){e.next=6;break}return 401===t.response.status||t.response.status,t.response.status,e.abrupt("return",Promise.reject(t.response.data?t.response.data:t.response||t.message));case 6:if(!t.request){e.next=10;break}return e.abrupt("return",Promise.reject(t.request));case 10:return e.abrupt("return",Promise.reject(t.message));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t(e).then((function(e){return e.data})).catch(n)},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return $({url:"/data/2.5/forecast".concat(e),method:"GET"})},te=function(e){return[200,"200"].includes(null===e||void 0===e?void 0:e.cod)},ne=function(e){return"object"===typeof e&&"function"!==typeof e&&null!=e},ae=function(){return!!document&&ie()<=O},re=function(){return!!document&&(ie()>O&&ie()<=x)},ce=function(){return!!document&&ie()>x},ie=function(){return(document.body||document.documentElement).clientWidth},oe=function(e){return{type:K,selected_index:e}},se=function(e){return{type:Z,page_size:e}},ue=n(61),de=n.n(ue),le=n(164),be=n(5);function je(){var e=Object(a.useState)({isMobile:!1,isTablet:!1,isDesktop:!1}),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){r({isMobile:ae(),isTablet:re(),isDesktop:ce()}),window.addEventListener("resize",(function(){var e={isMobile:ae(),isTablet:re(),isDesktop:ce()};(function(e,t){var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(var r=0,c=n;r<c.length;r++){var i=c[r];if(e[i]!==t[i])return!1}return!0})(n,e)||r(e)}))}),[]),n}var ve=function(e){var t,n=Object(b.d)((function(e){var t;return null===(t=e.weather)||void 0===t?void 0:t.temp_unit})),r=Object(b.d)((function(e){var t;return null===(t=e.weather)||void 0===t?void 0:t.selected_index})),c=Object(b.d)((function(e){var t;return null===(t=e.weather)||void 0===t?void 0:t.page_size})),i=Object(a.useState)([]),u=Object(o.a)(i,2),d=u[0],l=u[1],j=Object(b.c)(),v=je(),f=v.isMobile,p=v.isTablet,h=v.isDesktop,m=Object(S.a)(C);Object(a.useEffect)((function(){l(y(r,c,d))}),[f,p,h]);var O=m(),x=null===e||void 0===e?void 0:e.data;return x&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(M.a,{"aria-label":"temperature unit selector",name:"temperature",value:n,onChange:function(e){var t;j((t=e.target.value,{type:X,temp_unit:t}))},children:Object(s.jsxs)(le.a,{display:"flex",px:f?4:10,py:f?1:3,children:[Object(s.jsx)(le.a,{"data-testid":"celcius-button",flexGrow:1,children:Object(s.jsx)(z.a,{value:"celcius",control:Object(s.jsx)(I.a,{color:"primary"}),label:"Celcius"})}),Object(s.jsx)(le.a,{"data-testid":"fahrenheit-button",children:Object(s.jsx)(z.a,{value:"fahrenheit",control:Object(s.jsx)(I.a,{color:"primary"}),label:"Fahrenheit"})})]})}),Object(s.jsxs)(le.a,{display:"flex",mx:f?1:8,children:[Object(s.jsx)(le.a,{flexGrow:1,children:r>0&&Object(s.jsx)(de.a,{role:"button",onClick:function(){j(oe(r-1)),l(y(r-1,c,!1,d))},"data-testid":"prev-button",color:"primary",className:Object(be.a)(O.rotate,O.arrowIcon)})}),Object(s.jsx)(le.a,{children:(null===(t=x[r+1])||void 0===t?void 0:t.date)&&Object(s.jsx)(de.a,{role:"button",onClick:function(){j(oe(r+1)),l(y(r+1,c,!0,d))},"data-testid":"next-button",color:"primary",className:Object(be.a)(O.arrowIcon)})})]}),Object(s.jsx)(L.a,{container:!0,spacing:2,justify:"center","data-testid":"cards-container",className:O.root,children:x.map((function(e,t){return d.includes(t)?Object(s.jsx)(L.a,{item:!0,children:Object(s.jsxs)(N.a,{className:Object(be.a)(r===t&&O.cardBorder),"data-testid":"card",children:[Object(s.jsxs)(R.a,{children:[Object(s.jsxs)(F.a,{variant:"body2",component:"p","data-testid":"temp_display_unit",children:["Temp: ",E(e.avg_temp,n)]}),Object(s.jsxs)(F.a,{variant:"body2",component:"p",children:["Date: ",e.date]})]}),Object(s.jsx)(P.a,{children:Object(s.jsx)(W.a,{})})]})},e.date):null}))})]})||null},fe=n(163);var pe=function(){var e,t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(b.d)((function(e){return e.weather}),b.b),d=Object(b.c)();Object(a.useEffect)((function(){var e;d((e=function(e){if(!ne(e))return"";var t=[];return e&&Object.keys(e).length>0&&Object.entries(e).forEach((function(e){var n=Object(o.a)(e,2),a=n[0],r=n[1];r&&t.push("".concat(a,"=").concat(r))})),t.length>0&&"?".concat(t.join("&"))}({q:"Munich,de",APPID:"75f972b80e26f14fe6c920aa6a85ad57",cnt:40}),function(){var t=Object(q.a)(B.a.mark((function t(n){var a,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:J,data:[]}),t.prev=1,t.next=4,ee(e);case 4:a=t.sent,te(a)&&(r=g(a.list),n({type:U,data:r,message:"Success"})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:Y,data:t.t0,message:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[]),Object(a.useEffect)((function(){i.type===U&&c(!0)}),[i.type]);var l=je(),j=l.isMobile,v=l.isTablet,f=l.isDesktop;Object(a.useEffect)((function(){j&&(null===i||void 0===i?void 0:i.page_size)!==h&&d(se(h))}),[j,null===i||void 0===i?void 0:i.page_size,v,f]);var p=Object(S.a)({container:{maxWidth:j?"350px":"600px",margin:"0 auto"}})();return Object(a.useEffect)((function(){(f||v)&&(null===i||void 0===i?void 0:i.page_size)!==m&&d(se(m))}),[j,null===i||void 0===i?void 0:i.page_size,v,f]),r&&(null===i||void 0===i||null===(e=i.data)||void 0===e?void 0:e.cardsData)?Object(s.jsxs)(fe.a,{className:p.container,children:[Object(s.jsx)(ve,{data:i.data.cardsData}),Object(s.jsx)(A,{data:i.data.barChartData})]}):Object(s.jsx)(u,{})};var he,me,Oe=function(){return Object(s.jsx)(pe,{})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,170)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},ge=n(25),_e=n(84),ye=n(23),Ee=n(86),De={type:null,data:null,message:null,temp_unit:f,selected_index:0,page_size:h},Te=Object(ge.combineReducers)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0,n=t.data,a=t.type,r=t.message,c=Object(Ee.a)(t,["data","type","message"]);switch(a){case U:case J:case Y:return Object(ye.a)(Object(ye.a)({},e),{},{data:n,type:a,message:r});case X:return Object(ye.a)(Object(ye.a)({},e),{},{temp_unit:c.temp_unit});case Z:return Object(ye.a)(Object(ye.a)({},e),{},{page_size:c.page_size});case K:return Object(ye.a)(Object(ye.a)({},e),{},{selected_index:c.selected_index});default:return e}}}),we=n(85);var ke=null!==(he=me)&&void 0!==he?he:me=Object(ge.createStore)(Te,{},Object(_e.composeWithDevTools)(Object(ge.applyMiddleware)(we.a)));i.a.render(Object(s.jsx)(b.a,{store:ke,children:Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(Oe,{})})}),document.getElementById("root")),xe()},99:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.3abc29df.chunk.js.map