webpackJsonp([1],{198:function(e,t,n){(function(t){function debounce(e,t,i){function invokeFunc(t){var n=o,i=r;return o=r=void 0,d=t,c=e.apply(i,n)}function leadingEdge(e){return d=e,u=setTimeout(timerExpired,t),f?invokeFunc(e):c}function remainingWait(e){var n=e-l,i=e-d,o=t-n;return s?g(o,a-i):o}function shouldInvoke(e){var n=e-l,i=e-d;return void 0===l||n>=t||n<0||s&&i>=a}function timerExpired(){var e=p();if(shouldInvoke(e))return trailingEdge(e);u=setTimeout(timerExpired,remainingWait(e))}function trailingEdge(e){return u=void 0,m&&o?invokeFunc(e):(o=r=void 0,c)}function cancel(){void 0!==u&&clearTimeout(u),d=0,o=l=r=u=void 0}function flush(){return void 0===u?c:trailingEdge(p())}function debounced(){var e=p(),n=shouldInvoke(e);if(o=arguments,r=this,l=e,n){if(void 0===u)return leadingEdge(l);if(s)return u=setTimeout(timerExpired,t),invokeFunc(l)}return void 0===u&&(u=setTimeout(timerExpired,t)),c}var o,r,a,c,u,l,d=0,f=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(n);return t=toNumber(t)||0,isObject(i)&&(f=!!i.leading,s="maxWait"in i,a=s?b(toNumber(i.maxWait)||0,t):a,m="trailing"in i?!!i.trailing:m),debounced.cancel=cancel,debounced.flush=flush,debounced}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function isObjectLike(e){return!!e&&"object"==typeof e}function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&v.call(e)==o}function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return i;if(isObject(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=c.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):a.test(e)?i:+e}var n="Expected a function",i=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,s=d||f||Function("return this")(),m=Object.prototype,v=m.toString,b=Math.max,g=Math.min,p=function(){return s.Date.now()};e.exports=debounce}).call(t,n(41))},2867:function(e,t,n){n(1368),e.exports=n(3048)},3048:function(e,t,n){"use strict";var i=n(3049),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(i);Object.defineProperty(window,"NeosCKEditorApi",{value:o.default,enumerable:!1,writable:!1,configurable:!0})},3049:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(198),o=_interopRequireDefault(i),r=n(860),a=_interopRequireDefault(r),c={initialize:function initialize(){},toggleFormat:function toggleFormat(){},createEditor:function createEditor(){}},u="";t.default=function createCKEditorAPI(e){if(!e)return console.error("CKEditor not found!"),c;var t=null,n=null,i=function handleUserInteractionCallbackFactory(n){return function(){var i={};Object.keys(t.formattingRules).forEach(function(o){var r=t.formattingRules[o];if(void 0!==r.command)return n.getCommand(r.command)?void(i[o]=n.getCommand(r.command).state):void(i[o]=!1);if(void 0!==r.style){if(!n.elementPath())return void(i[o]=!1);var a=new e.style(r.style);return void(i[o]=a.checkActive(n.elementPath(),n))}if(r.extractCurrentFormatFn)return void(i[o]=r.extractCurrentFormatFn(n,e));throw new Error('\n                An error occured while checking a format in CK Editor.\n                The description parameter needs to either have a key "command",\n                a key "style", or a style "extractCurrentFormatFn" - none of which could be found.\n            ')});var o=JSON.stringify(i);o!==u&&(t.setFormattingUnderCursor(i),u=o)}};return e.disableAutoInline=!0,Object.assign(e.dtd.$editable,{b:!0,big:!0,i:!0,small:!0,tt:!0,abbr:!0,acronym:!0,cite:!0,code:!0,dfn:!0,em:!0,kbd:!0,strong:!0,samp:!0,var:!0,a:!0,bdo:!0,img:!0,q:!0,span:!0,sub:!0,sup:!0,button:!0,label:!0}),{initialize:function initialize(n){t=n,Object.values(t.plugins).forEach(function(t){t.initFn(e)})},toggleFormat:function toggleFormat(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.formattingRules[o];if(!a)return void console.warn("Formatting instruction "+o+" not found.");if(!n)return void console.warn("Current editor not found!");if(void 0!==a.command)return n.getCommand(a.command)?(n.execCommand(a.command),n.fire("change"),void i(n)()):void console.warn("Command "+n+" not found.");if(void 0!==a.style){if(!n.elementPath())return;var c=new e.style(a.style),u=c.checkActive(n.elementPath(),n)?"removeStyle":"applyStyle";return n[u](c),n.fire("change"),void i(n)()}if(a.applyStyleFn)return a.applyStyleFn(r,n,e),n.fire("change"),void i(n)();throw new Error('\n                An error occured while applying a format in CK Editor.\n                The description parameter needs to either have a key "command",\n                "style", or "applyFn" - none of which could be found.\n            ')},createEditor:function createEditor(r,c,u,l){var d=this;if(e.dtd.$inline[r.tagName.toLowerCase()]){if([].slice.call(r.childNodes).some(function(t){return t.tagName&&e.dtd.$block[t.tagName.toLowerCase()]})){console.warn("The editable ",r," of type <",r.tagName.toLowerCase(),"> (which is an inline html element) contains block-level children (like p, div, ...). This is invalid markup and currently not supported by CKEditor; that is why we cannot edit it currently.");var f=function onClickRemoveTags(){var t=(0,a.default)(r.innerHTML,e);r.innerHTML=t,d.createEditor(r,c,u,l),r.removeEventListener("click",onClickRemoveTags)};return void r.addEventListener("click",f)}}r.contentEditable="true";var s=e.inline(r,c);s.on("loaded",function(){s.config.buttons&&s.config.buttons.forEach(function(e){var t=s.ui.create(e);s.addFeature(t)})});var m=i(s);s.on("contentDom",function(e){e.editor.editable().on("contextmenu",function(t){e.editor.elementPath().contains("table")||t.cancel()},null,null,5)}),s.once("contentDom",function(){s.on("focus",function(){n=s,t.setCurrentlyEditedPropertyName(u),m()}),s.on("selectionChange",function(){m()}),s.on("change",(0,o.default)(function(){return l(s.getData())},500,{maxWait:5e3}))})}}}(window.CKEDITOR)},860:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n={},i=new t.filter(n),o=t.htmlParser.fragment.fromHtml(e),r=new t.htmlParser.basicWriter;return i.applyTo(o),o.writeHtml(r),e=r.getHtml(),e.replace(/<\/?[a-z0-9A-Z]+[^>]*>/g,"")}}},[2867]);
//# sourceMappingURL=Guest.js.map