var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),a=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return c.Date.now()};function p(t,e,n){var o,r,i,f,u,c,a=0,p=!1,b=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,a=e,f=t.apply(i,n)}function j(t){return a=t,u=setTimeout(T,e),p?g(t):f}function h(t){var n=t-c;return void 0===c||n>=e||n<0||b&&t-a>=i}function T(){var t=d();if(h(t))return w(t);u=setTimeout(T,function(t){var n=e-(t-c);return b?s(n,i-(t-a)):n}(t))}function w(t){return u=void 0,m&&o?g(t):(o=r=void 0,f)}function O(){var t=d(),n=h(t);if(o=arguments,r=this,c=t,n){if(void 0===u)return j(c);if(b)return u=setTimeout(T,e),g(c)}return void 0===u&&(u=setTimeout(T,e)),f}return e=y(e)||0,v(n)&&(p=!!n.leading,i=(b="maxWait"in n)?l(y(n.maxWait)||0,e):i,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==u&&clearTimeout(u),a=0,o=c=r=u=void 0},O.flush=function(){return void 0===u?f:w(d())},O}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==a.call(t)}(t))return NaN;if(v(t)){var f="function"==typeof t.valueOf?t.valueOf():t;t=v(f)?f+"":f}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var u=o.test(t);return u||r.test(t)?i(t.slice(2),u?2:8):n.test(t)?NaN:+t}document.querySelector(form),form.querySelector("textarea"),form.querySelector("input");
//# sourceMappingURL=03-feedback.b2a176fd.js.map
