this.wp=this.wp||{},this.wp.hooks=function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=401)}({20:function(n,r,e){"use strict";e.d(r,"a",(function(){return u}));var t=e(24);var o=e(37),i=e(28);function u(n){return function(n){if(Array.isArray(n))return Object(t.a)(n)}(n)||Object(o.a)(n)||Object(i.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},24:function(n,r,e){"use strict";function t(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}e.d(r,"a",(function(){return t}))},28:function(n,r,e){"use strict";e.d(r,"a",(function(){return o}));var t=e(24);function o(n,r){if(n){if("string"==typeof n)return Object(t.a)(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(t.a)(n,r):void 0}}},37:function(n,r,e){"use strict";function t(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}e.d(r,"a",(function(){return t}))},401:function(n,r,e){"use strict";e.r(r),e.d(r,"createHooks",(function(){return f})),e.d(r,"addAction",(function(){return h})),e.d(r,"addFilter",(function(){return v})),e.d(r,"removeAction",(function(){return m})),e.d(r,"removeFilter",(function(){return A})),e.d(r,"hasAction",(function(){return b})),e.d(r,"hasFilter",(function(){return y})),e.d(r,"removeAllActions",(function(){return _})),e.d(r,"removeAllFilters",(function(){return g})),e.d(r,"doAction",(function(){return F})),e.d(r,"applyFilters",(function(){return j})),e.d(r,"currentAction",(function(){return O})),e.d(r,"currentFilter",(function(){return k})),e.d(r,"doingAction",(function(){return x})),e.d(r,"doingFilter",(function(){return I})),e.d(r,"didAction",(function(){return S})),e.d(r,"didFilter",(function(){return w})),e.d(r,"actions",(function(){return T})),e.d(r,"filters",(function(){return M}));var t=function(n){return"string"!=typeof n||""===n?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var o=function(n){return"string"!=typeof n||""===n?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(n)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var i=function(n){return function(r,e,i){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;if(o(r)&&t(e))if("function"==typeof i)if("number"==typeof u){var c={callback:i,priority:u,namespace:e};if(n[r]){var a,l=n[r].handlers;for(a=l.length;a>0&&!(u>=l[a-1].priority);a--);a===l.length?l[a]=c:l.splice(a,0,c),(n.__current||[]).forEach((function(n){n.name===r&&n.currentIndex>=a&&n.currentIndex++}))}else n[r]={handlers:[c],runs:0};"hookAdded"!==r&&F("hookAdded",r,e,i,u)}else console.error("If specified, the hook priority must be a number.");else console.error("The hook callback must be a function.")}};var u=function(n,r){return function(e,i){if(o(e)&&(r||t(i))){if(!n[e])return 0;var u=0;if(r)u=n[e].handlers.length,n[e]={runs:n[e].runs,handlers:[]};else for(var c=n[e].handlers,a=function(r){c[r].namespace===i&&(c.splice(r,1),u++,(n.__current||[]).forEach((function(n){n.name===e&&n.currentIndex>=r&&n.currentIndex--})))},l=c.length-1;l>=0;l--)a(l);return"hookRemoved"!==e&&F("hookRemoved",e,i),u}}};var c=function(n){return function(r,e){return void 0!==e?r in n&&n[r].handlers.some((function(n){return n.namespace===e})):r in n}};e(20);var a=function(n,r){return function(e){n[e]||(n[e]={handlers:[],runs:0}),n[e].runs++;var t=n[e].handlers;for(var o=arguments.length,i=new Array(o>1?o-1:0),u=1;u<o;u++)i[u-1]=arguments[u];if(!t||!t.length)return r?i[0]:void 0;var c={name:e,currentIndex:0};for(n.__current.push(c);c.currentIndex<t.length;){var a=t[c.currentIndex],l=a.callback.apply(null,i);r&&(i[0]=l),c.currentIndex++}return n.__current.pop(),r?i[0]:void 0}};var l=function(n){return function(){return n.__current&&n.__current.length?n.__current[n.__current.length-1].name:null}};var s=function(n){return function(r){return void 0===r?void 0!==n.__current[0]:!!n.__current[0]&&r===n.__current[0].name}};var d=function(n){return function(r){if(o(r))return n[r]&&n[r].runs?n[r].runs:0}};var f=function(){var n=Object.create(null),r=Object.create(null);return n.__current=[],r.__current=[],{addAction:i(n),addFilter:i(r),removeAction:u(n),removeFilter:u(r),hasAction:c(n),hasFilter:c(r),removeAllActions:u(n,!0),removeAllFilters:u(r,!0),doAction:a(n),applyFilters:a(r,!0),currentAction:l(n),currentFilter:l(r),doingAction:s(n),doingFilter:s(r),didAction:d(n),didFilter:d(r),actions:n,filters:r}},p=f(),h=p.addAction,v=p.addFilter,m=p.removeAction,A=p.removeFilter,b=p.hasAction,y=p.hasFilter,_=p.removeAllActions,g=p.removeAllFilters,F=p.doAction,j=p.applyFilters,O=p.currentAction,k=p.currentFilter,x=p.doingAction,I=p.doingFilter,S=p.didAction,w=p.didFilter,T=p.actions,M=p.filters}});