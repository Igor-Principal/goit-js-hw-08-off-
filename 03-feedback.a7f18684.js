!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e,t){localStorage.setItem(e,JSON.stringify(t))}function r(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}}var i,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a="Expected a function",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,m=d||v||Function("return this")(),g=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return m.Date.now()};function j(e,t,n){var r,i,o,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(a);function m(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function g(e){return c=e,f=setTimeout(S,t),s?m(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function S(){var e=b();if(j(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?y(n,o-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?m(e):(r=i=void 0,u)}function T(){var e=b(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return g(l);if(d)return f=setTimeout(S,t),m(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=O(t)||0,h(n)&&(s=!!n.leading,o=(d="maxWait"in n)?p(O(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(b())},T}function h(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var r=l.test(t);return r||c.test(t)?s(t.slice(2),r?2:8):f.test(t)?NaN:+t}i=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(a);return h(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),j(e,t,{leading:r,maxWait:t,trailing:i})};var S,w,T=document.querySelector(".feedback-form");T.addEventListener("input",e(i)((function(e){var t=e.target.name,r=e.target.value;n(t,r)}),500)),T.addEventListener("submit",(function(e){e.preventDefault();var t=T.elements.email.value,n=T.elements.message.value,r={email:t,message:n};console.log(r),e.target.reset(),localStorage.removeItem("email"),localStorage.removeItem("message")})),S=r("email"),w=r("message"),T.elements.email.value=S,T.elements.message.value=w}();
//# sourceMappingURL=03-feedback.a7f18684.js.map