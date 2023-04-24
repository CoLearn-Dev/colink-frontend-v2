"use strict";(self.webpackChunkcolink_client=self.webpackChunkcolink_client||[]).push([[853],{77853:function(n,e,t){t.r(e),t.d(e,{default:function(){return nn}});var r=t(74165),i=t(93433),o=t(29439),s=t(15861),c=t(72791),a=t(78983),l=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M265.614,206.387H456V16H424V149.887L397.863,123.75c-79.539-79.539-208.96-79.54-288.5,0s-79.539,208.96,0,288.5a204.232,204.232,0,0,0,288.5,0l-22.627-22.627c-67.063,67.063-176.182,67.063-243.244,0s-67.063-176.183,0-243.246,176.182-67.063,243.245,0l28.01,28.01H265.614Z' class='ci-primary'/>"],u=t(65487),d=t(4031),f=t(62412),m=t(59434),x=t(63303),h=t(24846),p=t(28406),v=t(1413),j=t(45987),E=t(4942),b=t(81694),g=t.n(b);function y(n){var e=function(n){return n&&n.ownerDocument||document}(n);return e&&e.defaultView||window}var w=/([A-Z])/g;var Z=/^ms-/;function C(n){return function(n){return n.replace(w,"-$1").toLowerCase()}(n).replace(Z,"-ms-")}var k=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var N=function(n,e){var t="",r="";if("string"===typeof e)return n.style.getPropertyValue(C(e))||function(n,e){return y(n).getComputedStyle(n,e)}(n).getPropertyValue(C(e));Object.keys(e).forEach((function(i){var o=e[i];o||0===o?!function(n){return!(!n||!k.test(n))}(i)?t+=C(i)+": "+o+";":r+=i+"("+o+") ":n.style.removeProperty(C(i))})),r&&(t+="transform: "+r+";"),n.style.cssText+=";"+t},S=t(26752),L=!("undefined"===typeof window||!window.document||!window.document.createElement),H=!1,D=!1;try{var T={get passive(){return H=!0},get once(){return D=H=!0}};L&&(window.addEventListener("test",T,T),window.removeEventListener("test",T,!0))}catch(en){}var _=function(n,e,t,r){if(r&&"boolean"!==typeof r&&!D){var i=r.once,o=r.capture,s=t;!D&&i&&(s=t.__once||function n(r){this.removeEventListener(e,n,o),t.call(this,r)},t.__once=s),n.addEventListener(e,s,H?r:o)}n.addEventListener(e,t,r)};var M=function(n,e,t,r){var i=r&&"boolean"!==typeof r?r.capture:r;n.removeEventListener(e,t,i),t.__once&&n.removeEventListener(e,t.__once,i)};var O=function(n,e,t,r){return _(n,e,t,r),function(){M(n,e,t,r)}};function R(n,e,t){void 0===t&&(t=5);var r=!1,i=setTimeout((function(){r||function(n,e,t,r){if(void 0===t&&(t=!1),void 0===r&&(r=!0),n){var i=document.createEvent("HTMLEvents");i.initEvent(e,t,r),n.dispatchEvent(i)}}(n,"transitionend",!0)}),e+t),o=O(n,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(i),o()}}function A(n,e,t,r){null==t&&(t=function(n){var e=N(n,"transitionDuration")||"",t=-1===e.indexOf("ms")?1e3:1;return parseFloat(e)*t}(n)||0);var i=R(n,t,r),o=O(n,"transitionend",e);return function(){i(),o()}}function V(n,e){var t=N(n,e)||"",r=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*r}function z(n,e){var t=V(n,"transitionDuration"),r=V(n,"transitionDelay"),i=A(n,(function(t){t.target===n&&(i(),e(t))}),t+r)}var I=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.filter((function(n){return null!=n})).reduce((function(n,e){if("function"!==typeof e)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===n?e:function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];n.apply(this,r),e.apply(this,r)}}),null)};var J=function(n){return n&&"function"!==typeof n?function(e){n.current=e}:n};var W=function(n,e){return(0,c.useMemo)((function(){return function(n,e){var t=J(n),r=J(e);return function(n){t&&t(n),r&&r(n)}}(n,e)}),[n,e])},F=t(54164);var P,G=t(80184),U=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],K=c.forwardRef((function(n,e){var t=n.onEnter,r=n.onEntering,i=n.onEntered,o=n.onExit,s=n.onExiting,a=n.onExited,l=n.addEndListener,u=n.children,d=n.childRef,f=(0,j.Z)(n,U),m=(0,c.useRef)(null),x=W(m,d),h=function(n){var e;x((e=n)&&"setState"in e?F.findDOMNode(e):null!=e?e:null)},p=function(n){return function(e){n&&m.current&&n(m.current,e)}},E=(0,c.useCallback)(p(t),[t]),b=(0,c.useCallback)(p(r),[r]),g=(0,c.useCallback)(p(i),[i]),y=(0,c.useCallback)(p(o),[o]),w=(0,c.useCallback)(p(s),[s]),Z=(0,c.useCallback)(p(a),[a]),C=(0,c.useCallback)(p(l),[l]);return(0,G.jsx)(S.ZP,(0,v.Z)((0,v.Z)({ref:e},f),{},{onEnter:E,onEntered:g,onEntering:b,onExit:y,onExited:Z,onExiting:w,addEndListener:C,nodeRef:m,children:"function"===typeof u?function(n,e){return u(n,(0,v.Z)((0,v.Z)({},e),{},{ref:h}))}:c.cloneElement(u,{ref:h})}))})),Y=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","in","timeout","mountOnEnter","unmountOnExit","appear","getDimensionValue"],B={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function X(n,e){var t=e["offset".concat(n[0].toUpperCase()).concat(n.slice(1))],r=B[n];return t+parseInt(N(e,r[0]),10)+parseInt(N(e,r[1]),10)}var $=(P={},(0,E.Z)(P,S.Wj,"collapse"),(0,E.Z)(P,S.Ix,"collapsing"),(0,E.Z)(P,S.d0,"collapsing"),(0,E.Z)(P,S.cn,"collapse show"),P),q=c.forwardRef((function(n,e){var t=n.onEnter,r=n.onEntering,i=n.onEntered,o=n.onExit,s=n.onExiting,a=n.className,l=n.children,u=n.dimension,d=void 0===u?"height":u,f=n.in,m=void 0!==f&&f,x=n.timeout,h=void 0===x?300:x,p=n.mountOnEnter,E=void 0!==p&&p,b=n.unmountOnExit,y=void 0!==b&&b,w=n.appear,Z=void 0!==w&&w,C=n.getDimensionValue,k=void 0===C?X:C,N=(0,j.Z)(n,Y),S="function"===typeof d?d():d,L=(0,c.useMemo)((function(){return I((function(n){n.style[S]="0"}),t)}),[S,t]),H=(0,c.useMemo)((function(){return I((function(n){var e="scroll".concat(S[0].toUpperCase()).concat(S.slice(1));n.style[S]="".concat(n[e],"px")}),r)}),[S,r]),D=(0,c.useMemo)((function(){return I((function(n){n.style[S]=null}),i)}),[S,i]),T=(0,c.useMemo)((function(){return I((function(n){n.style[S]="".concat(k(S,n),"px"),n.offsetHeight}),o)}),[o,k,S]),_=(0,c.useMemo)((function(){return I((function(n){n.style[S]=null}),s)}),[S,s]);return(0,G.jsx)(K,(0,v.Z)((0,v.Z)({ref:e,addEndListener:z},N),{},{"aria-expanded":N.role?m:null,onEnter:L,onEntering:H,onEntered:D,onExit:T,onExiting:_,childRef:l.ref,in:m,timeout:h,mountOnEnter:E,unmountOnExit:y,appear:Z,children:function(n,e){return c.cloneElement(l,(0,v.Z)((0,v.Z)({},e),{},{className:g()(a,l.props.className,$[n],"width"===S&&"collapse-horizontal")}))}}))}));function Q(){return(Q=(0,s.Z)((0,r.Z)().mark((function n(e,t,o){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.apply(void 0,(0,i.Z)(o)).then((function(n){var e=t[0],r=t[1];"string"===typeof n?null!==r&&r(n):(null!==e&&e(n.privateKey),null!==r&&r(n.userJwt))})).catch((function(n){alert(n)}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var nn=function(){var n=(0,c.useState)(0),e=(0,o.Z)(n,2),t=(e[0],e[1]),r=(0,c.useState)(""),i=(0,o.Z)(r,2),s=i[0],v=i[1],j=(0,c.useState)(""),E=(0,o.Z)(j,2),b=(E[0],E[1],(0,c.useState)("")),g=(0,o.Z)(b,2),y=g[0],w=g[1],Z=(0,c.useState)(!1),C=(0,o.Z)(Z,2),k=C[0],N=C[1],S=(0,c.useState)(!1),L=(0,o.Z)(S,2),H=L[0],D=L[1],T=(0,c.useState)(!1),_=(0,o.Z)(T,2),M=(_[0],_[1],(0,c.useState)(!1)),O=(0,o.Z)(M,2),R=(O[0],O[1],(0,m.v9)((function(n){return n.jwt})).jwt),A=(0,m.v9)((function(n){return n.client})).client,V=(0,m.v9)((function(n){return n.isAdmin})).isAdmin;(0,m.I0)();return(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)(a.xH,{className:"mb-4",children:[(0,G.jsx)(a.sl,{children:(0,G.jsx)(a.rb,{children:(0,G.jsx)(a.b7,{sm:5,children:(0,G.jsxs)("h3",{id:"traffic",className:"card-title mb-0",children:["Settings ",(0,G.jsx)(h.Z,{icon:u.M,size:"xl",className:"ms-1"})]})})})}),(0,G.jsx)(a.Bt,{children:(0,G.jsxs)(a.rb,{children:[(0,G.jsxs)(a.b7,{children:[(0,G.jsx)(a.xH,{className:"mt-2 mb-2",children:(0,G.jsx)(a.sl,{children:(0,G.jsx)(a.rb,{children:(0,G.jsxs)(a.b7,{children:[(0,G.jsxs)(a.tj,{id:"traffic",className:"card-title mb-0",children:["Server Status ",(0,G.jsx)(h.Z,{icon:d.e,size:"lg",className:"ms-1"})]}),(0,G.jsx)("hr",{}),(0,G.jsxs)(a.uS,{children:["Host: ",A," ",(0,G.jsx)("br",{}),"Status: Online"]})]})})})}),(0,G.jsx)(a.xH,{className:"mt-2 mb-2",children:(0,G.jsx)(a.sl,{children:(0,G.jsx)(a.rb,{children:(0,G.jsxs)(a.b7,{children:[(0,G.jsxs)(a.tj,{id:"traffic",className:"card-title mb-0",children:["User Status ",(0,G.jsx)(h.Z,{icon:f.E,size:"lg",className:"ms-1"})]}),(0,G.jsx)("hr",{}),(0,G.jsxs)(a.uS,{children:["JWT Information ",(0,G.jsx)("br",{}),(0,G.jsx)(a.If,{content:R,placement:"top",children:(0,G.jsx)(a.u5,{className:"mt-1 btn-sm",color:"light",children:"Hover to Reveal"})}),(0,G.jsx)(a.u5,{className:"mt-1 ms-2 btn-sm",color:"light",children:(0,G.jsx)("a",{download:"user_jwt.txt",href:(0,x.px)(R),style:{textDecoration:"none",color:"black"},children:"Download"})}),(0,G.jsx)(a.u5,{className:"mt-1 ms-2 btn-sm",onClick:function(){return(0,x.zp)(R)},color:"light",children:"Copy to Clipboard"})]}),(0,G.jsxs)(a.uS,{children:["Refresh JWT (# Days)",(0,G.jsxs)(a.YR,{className:"mt-1 mb-3",style:{width:"400px"},children:[(0,G.jsx)(a.wV,{children:(0,G.jsx)(h.Z,{icon:l,size:"sm"})}),(0,G.jsx)(a.jO,{"aria-label":"number input",onChange:function(n){var e=parseInt(n.target.value);t("number"===typeof e?parseInt(n.target.value):0)},size:"sm"}),(0,G.jsx)(a.u5,{className:"ms-2 btn-sm",onClick:function(){},color:"light",children:"Refresh JWT"}),(0,G.jsx)("span",{className:"ms-2",children:"(broken)"})]})]})]})})})})]}),V?(0,G.jsx)(a.b7,{children:(0,G.jsx)(a.xH,{className:"mt-2 mb-2",children:(0,G.jsx)(a.sl,{children:(0,G.jsx)(a.rb,{children:(0,G.jsxs)(a.b7,{children:[(0,G.jsx)(a.tj,{id:"traffic",className:"card-title mb-0",children:"Create User JWT"}),(0,G.jsx)("hr",{}),(0,G.jsxs)(a.uS,{children:["Generate New Private Key + JWT"," ",(0,G.jsx)(a.u5,{className:"ms-2 btn-sm",onClick:function(){!function(n,e,t){Q.apply(this,arguments)}(p.Z_,[w,v],[A,R])},color:"light",children:"Generate JWT"}),(0,G.jsx)("span",{className:"ms-2",children:"(broken)"})]}),(0,G.jsxs)(a.uS,{children:[(0,G.jsx)("h3",{children:"Generated JWT:"}),""!=s?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("span",{children:"Set"}),(0,G.jsx)("button",{onClick:function(){return N(!k)},"aria-controls":"collapse","aria-expanded":k,children:"Display"}),(0,G.jsx)("button",{children:(0,G.jsx)("a",{download:"user_jwt.txt",href:(0,x.px)(s),children:"Download"})}),(0,G.jsx)("button",{onClick:function(){return(0,x.zp)(s)},children:"Copy to Clipboard"}),(0,G.jsx)(q,{in:k,children:(0,G.jsx)("div",{children:s})}),(0,G.jsx)("br",{})]}):(0,G.jsx)("span",{children:"No JWT Generated"}),""!=y?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("h3",{children:"Private Key:"}),(0,G.jsx)("span",{children:"Set"}),(0,G.jsx)("button",{onClick:function(){return D(!H)},"aria-controls":"collapse","aria-expanded":H,children:"Display"}),(0,G.jsx)("button",{children:(0,G.jsx)("a",{download:"private_key.txt",href:(0,x.px)(y),children:"Download"})}),(0,G.jsx)("button",{onClick:function(){return(0,x.zp)(y)},children:"Copy to Clipboard"}),(0,G.jsx)(q,{in:H,children:(0,G.jsx)("div",{children:y})})]}):(0,G.jsx)(G.Fragment,{})]})]})})})})}):(0,G.jsx)(G.Fragment,{})]})})]})})}},4031:function(n,e,t){t.d(e,{e:function(){return r}});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM175.047,447.667A208.26,208.26,0,0,1,64.333,175.047c1.018-2.408,2.092-4.785,3.2-7.145L120,215.126v63.235L197.1,360H236v49.047l-47.052,43.915Q181.926,450.568,175.047,447.667Zm228.031-44.589A207.253,207.253,0,0,1,256,464a210.4,210.4,0,0,1-29.722-2.107L268,422.953V328H210.9L152,265.639V200.874L83.7,139.408a209.259,209.259,0,0,1,91.343-75.075A207.793,207.793,0,0,1,371.3,82.839l-45.564,58.582,15.49,38.725-10.485,10.485-78.618-15.723L208,208v88H384l50.345,67.126A208.127,208.127,0,0,1,403.078,403.078ZM464,256a206.763,206.763,0,0,1-13.873,74.837L400,264H240V224l19.877-14.908,81.382,16.277,37.515-37.515-16.51-41.275,34.2-43.977q3.361,3.084,6.61,6.32A207.253,207.253,0,0,1,464,256Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=853.d15db044.chunk.js.map