import{c}from"/build/_shared/chunk-2NH4LW52.js";var _=c((d,a)=>{function s(e){return e?typeof e=="string"?e:e.source:null}function r(...e){return e.map(n=>s(n)).join("")}function o(e){let t=/[a-zA-Z_$][a-zA-Z0-9_$]*/,n=/([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)/,i={className:"rest_arg",begin:/[.]{3}/,end:t,relevance:10};return{name:"ActionScript",aliases:["as"],keywords:{keyword:"as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",literal:"true false null undefined"},contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,{className:"class",beginKeywords:"package",end:/\{/,contains:[e.TITLE_MODE]},{className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},e.TITLE_MODE]},{className:"meta",beginKeywords:"import include",end:/;/,keywords:{"meta-keyword":"import include"}},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,illegal:/\S/,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,i]},{begin:r(/:\s*/,n)}]},e.METHOD_GUARD],illegal:/#/}}a.exports=o});export default _();
