(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{YBs9:function(e,t,s){"use strict";s.r(t),s.d(t,"scopeCss",(function(){return k}));const r="-shadowcsshost",c=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",o=new RegExp("(-shadowcsshost"+c,"gim"),n=new RegExp("(-shadowcsscontext"+c,"gim"),l=new RegExp("(-shadowcssslotted"+c,"gim"),a="-shadowcsshost-no-combinator",i=/-shadowcsshost-no-combinator([^\s]*)/,p=[/::shadow/g,/::content/g],h=/-shadowcsshost/gim,u=/:host/gim,d=/::slotted/gim,g=/:host-context/gim,m=/\/\*\s*[\s\S]*?\*\//g,f=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,x=/([{}])/g,$="%BLOCK%",_=(e,t)=>{const s=b(e);let r=0;return s.escapedString.replace(w,(...e)=>{const c=e[2];let o="",n=e[4],l="";n&&n.startsWith("{%BLOCK%")&&(o=s.blocks[r++],n=n.substring($.length+1),l="{");const a=t({selector:c,content:o});return`${e[1]}${a.selector}${e[3]}${l}${a.content}${n}`})},b=e=>{const t=e.split(x),s=[],r=[];let c=0,o=[];for(let n=0;n<t.length;n++){const e=t[n];"}"===e&&c--,c>0?o.push(e):(o.length>0&&(r.push(o.join("")),s.push($),o=[]),s.push(e)),"{"===e&&c++}return o.length>0&&(r.push(o.join("")),s.push($)),{escapedString:s.join(""),blocks:r}},S=(e,t,s)=>e.replace(t,(...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let c=0;c<t.length;c++){const o=t[c].trim();if(!o)break;r.push(s(a,o,e[3]))}return r.join(",")}return a+e[3]}),O=(e,t,s)=>e+t.replace(r,"")+s,W=(e,t,s)=>t.indexOf(r)>-1?O(e,t,s):e+t+s+", "+t+" "+e+s,j=(e,t,s,r,c)=>_(e,e=>{let c=e.selector,o=e.content;return"@"!==e.selector[0]?c=((e,t,s,r)=>e.split(",").map(e=>r&&e.indexOf("."+r)>-1?e.trim():((e,t)=>!(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t).test(e))(e,t)?((e,t,s)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,(e,...t)=>t[0])),c=e=>{let c=e.trim();if(!c)return"";if(e.indexOf(a)>-1)c=((e,t,s)=>{if(h.lastIndex=0,h.test(e)){const t="."+s;return e.replace(i,(e,s)=>s.replace(/([^:]*)(:*)(.*)/,(e,s,r,c)=>s+t+r+c)).replace(h,t+" ")}return t+" "+e})(e,t,s);else{const t=e.replace(h,"");if(t.length>0){const e=t.match(/([^:]*)(:*)(.*)/);e&&(c=e[1]+r+e[2]+e[3])}}return c},o=(e=>{const t=[];let s,r=0;return s=(e=e.replace(/(\[[^\]]*\])/g,(e,s)=>{const c=`__ph-${r}__`;return t.push(s),r++,c})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(e,s,c)=>{const o=`__ph-${r}__`;return t.push(c),r++,s+o}),{content:s,placeholders:t}})(e);let n,l="",p=0;const u=/( |>|\+|~(?!=))\s*/g;let d=!((e=o.content).indexOf(a)>-1);for(;null!==(n=u.exec(e));){const t=n[1],s=e.slice(p,n.index).trim();d=d||s.indexOf(a)>-1,l+=`${d?c(s):s} ${t} `,p=u.lastIndex}const g=e.substring(p);return d=d||g.indexOf(a)>-1,l+=d?c(g):g,m=o.placeholders,l.replace(/__ph-(\d+)__/g,(e,t)=>m[+t]);var m})(e,t,s).trim():e.trim()).join(", "))(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=j(e.content,t,s,r)),{selector:c.replace(/\s{2,}/g," ").trim(),content:o}}),k=(e,t,s)=>{const c=t+"-h",i=t+"-s",h=e.match(f)||[];e=e.replace(m,"");const w=[];if(s){const t=e=>{const t=`/*!@___${w.length}___*/`;return w.push({placeholder:t,comment:`/*!@${e.selector}*/`}),e.selector=t+e.selector,e};e=_(e,e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=_(e.content,t),e):e)}const x=((e,t,s,c,i)=>{const h=((e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(l,(...e)=>{if(e[2]){const t=e[2].trim(),c=s+t+e[3];let o="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;o=t+o}const n=o+c,l=`${o.trimRight()}${c.trim()}`;return n.trim()!==l.trim()&&r.push({orgSelector:n,updatedSelector:`${l}, ${n}`}),c}return a+e[3]}),{selectors:r,cssText:e}})(e=(e=>S(e,n,W))(e=(e=>S(e,o,O))(e=e.replace(g,"-shadowcsscontext").replace(u,r).replace(d,"-shadowcssslotted"))),c);return e=(e=>p.reduce((e,t)=>e.replace(t," "),e))(e=h.cssText),t&&(e=j(e,t,s,c)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,"."+s)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:h.selectors}})(e,t,c,i);return e=[x.cssText,...h].join("\n"),s&&w.forEach(({placeholder:t,comment:s})=>{e=e.replace(t,s)}),x.slottedSelectors.forEach(t=>{e=e.replace(t.orgSelector,t.updatedSelector)}),e}}}]);