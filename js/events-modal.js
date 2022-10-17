(()=>{var e={715:function(e){e.exports=function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var o,i,a,r,s,l=(o=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function n(e){var o=e.targetModal,i=e.triggers,a=void 0===i?[]:i,r=e.onShow,s=void 0===r?function(){}:r,l=e.onClose,c=void 0===l?function(){}:l,d=e.openTrigger,u=void 0===d?"data-micromodal-trigger":d,h=e.closeTrigger,m=void 0===h?"data-micromodal-close":h,v=e.openClass,f=void 0===v?"is-open":v,g=e.disableScroll,p=void 0!==g&&g,y=e.disableFocus,b=void 0!==y&&y,w=e.awaitCloseAnimation,M=void 0!==w&&w,E=e.awaitOpenAnimation,k=void 0!==E&&E,T=e.debugMode,C=void 0!==T&&T;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.modal=document.getElementById(o),this.config={debugMode:C,disableScroll:p,openTrigger:u,closeTrigger:m,openClass:f,onShow:s,onClose:c,awaitCloseAnimation:M,awaitOpenAnimation:k,disableFocus:b},a.length>0&&this.registerTriggers.apply(this,t(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var i,a;return i=n,(a=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];n.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var n=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",n,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var n=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(n),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&this.closeModal(e)}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(o);return Array.apply(void 0,t(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var n=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));n.length>0&&n[0].focus(),0===n.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var n=t.indexOf(document.activeElement);e.shiftKey&&0===n&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&n===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&e(i.prototype,a),n}(),a=null,r=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},s=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var n in t)r(n);return!0},{init:function(e){var n=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),o=t(document.querySelectorAll("[".concat(n.openTrigger,"]"))),r=function(e,t){var n=[];return e.forEach((function(e){var o=e.attributes[t].value;void 0===n[o]&&(n[o]=[]),n[o].push(e)})),n}(o,n.openTrigger);if(!0!==n.debugMode||!1!==s(o,r))for(var l in r){var c=r[l];n.targetModal=l,n.triggers=t(c),a=new i(n)}},show:function(e,t){var n=t||{};n.targetModal=e,!0===n.debugMode&&!1===r(e)||(a&&a.removeEventListeners(),(a=new i(n)).showModal())},close:function(e){e?a.closeModalById(e):a.closeModal()}});return window.MicroModal=l,l}()}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(715),t=n.n(e);class o extends HTMLElement{constructor(){super(),this.isSameMonth=(e,t)=>e.getMonth()===t.getMonth(),this.isInvalidDate=e=>"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()),this.eventMarkup='<li class="event-detail"><h4>{{event-name}}<span>{{event-dates}}</span></h4><h5>{{event-location}}</h5><p>{{event-summary}}</p><ul id="event-links"></ul></li>',this.modalMarkup='<div id="eventlist-container"><header class="modal__header"><h2 class="modal__title">{{title}}</h2></header><main class="modal__content" id="modal-1-content"><ul id="event-list-root" class="eventlist-container"></ul></main></div>',this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.shadow.appendChild(this.generateComponentStyles())}set eventData(e){this.renderModal(e.detail),t().show("event-modal")}generateComponentStyles(){const e=document.createElement("style");return e.setAttribute("type","text/css"),e.textContent="\n    .modal__container {\n        padding-right: 0;\n    }\n    .modal__content {\n        max-height: 400px;\n        overflow: auto;\n        margin: 1rem 0;\n        padding-right: 30px;\n        line-height:1.5;\n        color:rgba(0,0,0,.8)\n    }\n    .modal__title {\n        margin: 0 0 0.7em;\n    }\n    .eventlist-container {\n        padding: 0;\n    }\n    .event-detail {\n        list-style: none;\n        margin-bottom: 3em;\n    }\n    h4 {\n        margin-bottom: 0;\n        border-bottom: 1px solid #ccc;\n    }\n    h4 span {\n        float: right;\n    }\n    h5 {\n        margin-top: 0;\n    }\n    p {\n        margin-bottom: 0;\n    }\n}",e}renderModal(e){const t=this.shadowRoot.querySelector("#eventlist-container");t&&t.remove();let n=this.modalMarkup.replace(/\{\{title\}\}/,`${this.renderEventCount(e.events)} on ${this.formatDate(e.date)}`);const o=(new DOMParser).parseFromString(n,"text/html").body.childNodes[0];this.buildEventListHtml(o,e.events,e.date),this.shadowRoot.appendChild(o)}renderEventCount(e){if(!e)return"No events";switch(e.length){case 0:return"No events";case 1:return"One event";case 2:return"Two events";case 3:return"Three events";case 4:return"Four events";case 5:return"Five events";case 6:return"Six events";case 7:return"Seven events";case 8:return"Eight events";case 9:return"Nine events";case 10:return"Ten events";default:return`${e.length} Events`}}formatDate(e){const t=new Date(`${e}T00:00:00`),n=t.getDate();return`${this.getMonthName(t)} ${n}, ${t.getFullYear()}`}getMonthName(e){return["Jan.","Feb.","March","April","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."][e.getMonth()]}getDayName(e){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()]}buildEventListHtml(e,t,n){const o=new DOMParser,i=e.querySelector("#event-list-root"),a=o.parseFromString(this.eventMarkup,"text/html").querySelector("#event-links");i.innerHTML="";for(let e of t){let t=this.eventMarkup.replace("{{event-name}}",e.name).replace("{{event-location}}",e.location).replace("{{event-summary}}",e.summary||"").replace("{{event-dates}}",this.formatDateRangeTextFor(e.dates,n));const r=this.renderEventLinks(a.cloneNode(),e.links);let s=o.parseFromString(t,"text/html").body.childNodes[0];s.querySelector("#event-links").replaceWith(r),i.appendChild(s)}return i}formatDateRangeTextFor(e,t){const n=this.calculateDisplayDays(t,e),o=new Date(`${n.start}T00:00:00`),i=new Date(`${n.end}T00:00:00`);if(n.start===n.end||this.isInvalidDate(i))return`${this.getDayName(o)}, ${this.getMonthName(o)} ${o.getDate()}`;if(this.isSameMonth(o,i)){const e=(i-o)/1e3/3600/24<2?"/":"&ndash;";return`${this.getMonthName(o)} ${o.getDate()} ${e} ${i.getDate()}`}return`${this.getMonthName(o)} ${o.getDate()} &ndash; ${this.getMonthName(i)} ${i.getDate()}`}calculateDisplayDays(e,t){const n=new Date(e).getTime();return t.find((e=>{const t=new Date(e.start).getTime(),o=new Date(e.end).getTime();return t<=n&&o>=n}))}renderEventLinks(e,t){return t.forEach((t=>{const n=document.createElement("li"),o=document.createElement("a");o.setAttribute("href",t.url),o.setAttribute("target","_blank"),o.innerText=t.linkText,n.appendChild(o),e.appendChild(n)})),e}}customElements.define("events-modal",o)})()})();