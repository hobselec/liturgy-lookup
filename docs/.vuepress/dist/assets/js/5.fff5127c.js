(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{327:function(t,e,o){var n=o(5),r=o(7),a=o(83);t.exports=function(t,e,o){var i,u;return a&&n(i=e.constructor)&&i!==o&&r(u=i.prototype)&&u!==o.prototype&&a(t,u),t}},329:function(t,e,o){var n=o(11),r=o(0),a=o(1),i=o(109),u=o(327),s=o(23),d=o(12).f,y=o(52).f,c=o(34),k=o(180),x=o(21),f=o(178),g=o(177),l=o(17),h=o(2),p=o(9),m=o(29).enforce,q=o(183),v=o(4),b=o(179),w=o(185),E=v("match"),L=r.RegExp,S=L.prototype,I=r.SyntaxError,R=a(f),G=a(S.exec),_=a("".charAt),W=a("".replace),T=a("".indexOf),A=a("".slice),F=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,O=/a/g,K=/a/g,C=new L(O)!==O,D=g.MISSED_STICKY,H=g.UNSUPPORTED_Y,N=n&&(!C||D||b||w||h((function(){return K[E]=!1,L(O)!=O||L(K)==K||"/a/i"!=L(O,"i")})));if(i("RegExp",N)){for(var B=function(t,e){var o,n,r,a,i,d,y=c(S,this),f=k(t),g=void 0===e,l=[],h=t;if(!y&&f&&g&&t.constructor===B)return t;if((f||c(S,t))&&(t=t.source,g&&(e="flags"in h?h.flags:R(h))),t=void 0===t?"":x(t),e=void 0===e?"":x(e),h=t,b&&"dotAll"in O&&(n=!!e&&T(e,"s")>-1)&&(e=W(e,/s/g,"")),o=e,D&&"sticky"in O&&(r=!!e&&T(e,"y")>-1)&&H&&(e=W(e,/y/g,"")),w&&(t=(a=function(t){for(var e,o=t.length,n=0,r="",a=[],i={},u=!1,s=!1,d=0,y="";n<=o;n++){if("\\"===(e=_(t,n)))e+=_(t,++n);else if("]"===e)u=!1;else if(!u)switch(!0){case"["===e:u=!0;break;case"("===e:G(F,A(t,n+1))&&(n+=2,s=!0),r+=e,d++;continue;case">"===e&&s:if(""===y||p(i,y))throw new I("Invalid capture group name");i[y]=!0,a[a.length]=[y,d],s=!1,y="";continue}s?y+=e:r+=e}return[r,a]}(t))[0],l=a[1]),i=u(L(t,e),y?this:S,B),(n||r||l.length)&&(d=m(i),n&&(d.dotAll=!0,d.raw=B(function(t){for(var e,o=t.length,n=0,r="",a=!1;n<=o;n++)"\\"!==(e=_(t,n))?a||"."!==e?("["===e?a=!0:"]"===e&&(a=!1),r+=e):r+="[\\s\\S]":r+=e+_(t,++n);return r}(t),o)),r&&(d.sticky=!0),l.length&&(d.groups=l)),t!==h)try{s(i,"source",""===h?"(?:)":h)}catch(t){}return i},J=function(t){t in B||d(B,t,{configurable:!0,get:function(){return L[t]},set:function(e){L[t]=e}})},P=y(L),j=0;P.length>j;)J(P[j++]);S.constructor=B,B.prototype=S,l(r,"RegExp",B)}q("RegExp")},330:function(t,e,o){var n=o(0),r=o(11),a=o(179),i=o(22),u=o(12).f,s=o(29).get,d=RegExp.prototype,y=n.TypeError;r&&a&&u(d,"dotAll",{configurable:!0,get:function(){if(this!==d){if("RegExp"===i(this))return!!s(this).dotAll;throw y("Incompatible receiver, RegExp required")}}})},331:function(t,e,o){var n=o(0),r=o(11),a=o(177).MISSED_STICKY,i=o(22),u=o(12).f,s=o(29).get,d=RegExp.prototype,y=n.TypeError;r&&a&&u(d,"sticky",{configurable:!0,get:function(){if(this!==d){if("RegExp"===i(this))return!!s(this).sticky;throw y("Incompatible receiver, RegExp required")}}})},332:function(t,e,o){"use strict";var n=o(1),r=o(82).PROPER,a=o(17),i=o(8),u=o(34),s=o(21),d=o(2),y=o(178),c=RegExp.prototype,k=c.toString,x=n(y),f=d((function(){return"/a/b"!=k.call({source:"a",flags:"b"})})),g=r&&"toString"!=k.name;(f||g)&&a(RegExp.prototype,"toString",(function(){var t=i(this),e=s(t.source),o=t.flags;return"/"+e+"/"+s(void 0===o&&u(c,t)&&!("flags"in c)?x(t):o)}),{unsafe:!0})},337:function(t){t.exports=JSON.parse('[{"id":1,"name":"Kyrie","source":"Bread of Life","page":"31","score":[{"key":"F","notes":[{"key":"a/4","duration":"q","text":"Ky -"},{"key":"f/4","duration":"q","text":"ri -"},{"key":"g/4","duration":"q","text":"e"},{"key":"a/4","duration":"q","text":"e -"}]},{"notes":[{"key":"b/4","duration":"q","dots":1,"text":"le -"},{"key":"c/5","duration":"8","text":"i -"},{"key":"a/4","duration":"h","text":"son:"}]}]},{"id":2,"name":"Glory to God","source":"WOV: Bread of Life","page":"","score":[{"key":"D","notes":[{"key":"d/4","duration":"q","text":"Glo -"},{"key":"f/4","duration":"8","text":"ry"},{"key":"g/4","duration":"8","text":"to"},{"key":"a/4","duration":"h","text":"God"}],"beams":[[1,2]]},{"notes":[{"key":"b/4","duration":"q","text":"Glo -"},{"key":"a/4","duration":"8","text":"ry"},{"key":"g/4","duration":"8","text":"to"},{"key":"f/4","duration":"h","text":"God"}],"beams":[[1,2]]}]},{"id":3,"name":"Kyrie","source":"ELW setting no. 3","page":"42","score":[{"key":"F","notes":[{"key":"c/4","duration":"q","text":"In"},{"key":"d/4","duration":"q","text":""},{"key":"f/4","duration":"1/2","text":"peace, let us pray to"},{"key":"d/4","duration":"q","text":"the"},{"key":"f/4","duration":"w","text":"Lord."}],"ties":[[0,1]]}]},{"id":4,"name":"Kyrie","source":"Now the Feast","page":"","score":[{"key":"G","time":"2/4","notes":[{"key":"b/4/r","duration":"q"},{"key":"e/4","duration":"q","text":"In"}]},{"notes":[{"key":"e/4","duration":"q","dots":1,"text":"peace,"},{"key":"f/4","duration":"8","text":"in"}]},{"notes":[{"key":"e/4","duration":"q","text":"peace,"},{"key":"e/4","duration":"8","text":"let"},{"key":"f/4","duration":"8","text":"us"}],"beams":[[1,2]]},{"notes":[{"key":"g/4","duration":"8","text":"pray"},{"key":"f/4","duration":"8","text":""},{"key":"e/4","duration":"8","text":"to"},{"key":"d/4","duration":"8","text":"the"}],"beams":[[0,1],[2,3]],"ties":[[0,1]]}]},{"id":5,"name":"Kyrie","source":"ELW Setting no. 4","page":"","score":[{"key":"C","notes":[{"key":"a/4","duration":"1/2","text":"In peace, let us pray to"},{"key":"g/4","duration":"q","text":"the"},{"key":"a/4","duration":"w","text":"Lord."}]}]},{"id":6,"name":"The Great Thanksgiving","source":"LBW Setting no. 2","page":"35","score":[{"key":"A","notes":[{"key":"e/4","duration":"q","text":"The","stem":"hide"},{"key":"f/4","duration":"q","text":"","stem":"hide"},{"key":"g/4","duration":"q","text":"Lord","stem":"hide"},{"key":"e/4","duration":"q","text":"be","stem":"hide"},{"key":"f/4","duration":"q","text":"","stem":"hide"},{"key":"g/4","duration":"q","text":"with","stem":"hide"},{"key":"f/4","duration":"q","text":"","stem":"hide"},{"key":"f/4","duration":"w","text":"you.","stem":"hide"}],"ties":[[0,1],[3,4],[5,6]]}]},{"id":7,"name":"This is the Feast","source":"ELW Setting no. 4","page":"","score":[{"key":"D","notes":[{"key":"d/5","duration":"h","text":"This"},{"key":"b/4","duration":"q","text":"is"},{"key":"d/5","duration":"q","text":"the"}]},{"notes":[{"key":"a/4","duration":"h","dots":1,"text":"feast"},{"key":"a/4","duration":"q","text":"of"}]},{"notes":[{"key":"b/4","duration":"8","dots":1,"text":"vic-"},{"key":"a/4","duration":"16","text":"to-"},{"key":"g/4","duration":"q","text":"ry"},{"key":"a/4","duration":"q","text":"for"},{"key":"b/4","duration":"q","text":"our"}],"beams":[[0,1]]}]},{"id":8,"name":"Gospel Acclamation","source":"WOV","page":"?","score":[{"key":"F","notes":[{"key":"a/4","duration":"q","text":"Al"},{"key":"b/4","duration":"8","text":"-"},{"key":"c/5","duration":"8","dots":1,"text":"le"},{"key":"b/4","duration":"16"},{"key":"a/4","duration":"8","text":"-"}],"beams":[[2,4]],"ties":[[0,1],[2,4]]},{"notes":[{"key":"g/4","duration":"q","dots":1,"text":"lu"},{"key":"f/4","duration":"q","dots":1,"text":"- ia"}]}]},{"id":9,"name":"Great Thanksgiving","source":"Bread of Life","page":"?","score":[{"key":"E","notes":[{"key":"g/4","duration":"q","text":"The"},{"key":"a/4","duration":"q","text":""}],"ties":[[0,1]]},{"notes":[{"key":"g/4","duration":"h","text":"Lord"},{"key":"f/4","duration":"q","text":"Be"},{"key":"e/4","duration":"q","text":"With"}]},{"notes":[{"key":"g/4","duration":"h","text":"you."}]}]},{"id":10,"name":"Offertory","source":"ELW","page":"?","score":[{"key":"D","notes":[{"key":"d/4","duration":"q","text":"Let"},{"key":"f/4","duration":"8","text":"the"},{"key":"g/4","duration":"8","text":""},{"key":"a/4","duration":"8","text":"vine-"},{"key":"a/4","duration":"q","text":"yards"},{"key":"a/4","duration":"8","text":"be"}],"ties":[[1,2]],"beams":[[1,2]]},{"notes":[{"key":"b/4","duration":"q","text":"fruit-"},{"key":"a/4","duration":"8","text":"ful,"},{"key":"g/4","duration":"8"},{"key":"f/4","duration":"q","dots":1,"text":"Lord,"},{"key":"d/4","duration":"8","text":"and"}],"ties":[[1,2]],"beams":[[1,2]]}]},{"id":11,"name":"Lamb of God","source":"ELW","page":"?","score":[{"key":"F","notes":[{"key":"f/4","duration":"h","text":"Lamb"},{"key":"f/4","duration":"q","text":"of"}]},{"notes":[{"key":"e/4","duration":"h","text":"God,"},{"key":"e/4","duration":"q","text":"you"}]},{"notes":[{"key":"f/4","duration":"h","text":"take"},{"key":"f/4","duration":"q","text":"a -"}]},{"notes":[{"key":"c/4","duration":"h","text":"way"},{"key":"c/4","duration":"q","text":"the"}]}]},{"id":12,"name":"Holy Holy Holy","source":"ELW","page":"?","score":[{"key":"F","notes":[{"key":"f/4","duration":"h","text":"Ho -"},{"key":"f/4","duration":"q","text":"ly,"},{"key":"g/4","duration":"q","text":"Ho "},{"key":"a/4","duration":"q","text":"-"},{"key":"c/5","duration":"q","text":"ly,"}],"ties":[[2,3]]},{"notes":[{"key":"f/4","duration":"h","text":"Ho -"},{"key":"f/4","duration":"q","text":"ly,"},{"key":"d/4","duration":"q","text":"Lo"},{"key":"c/4","duration":"h","text":"rd,"}],"ties":[[2,3]]}]},{"id":13,"name":"Now the Feast","source":"ELW","page":"?","score":[{"key":"E","notes":[{"key":"g/4","duration":"q","text":"Now"},{"key":"a/4","duration":"8","text":"the,"}]},{"notes":[{"key":"b/4","duration":"q","text":"feast"},{"key":"g/4","duration":"8","text":"and"}]},{"notes":[{"key":"e/4","duration":"q","text":"cel"},{"key":"a/4","duration":"8","text":"e"}]},{"notes":[{"key":"g/4","duration":"8","text":"bra"},{"key":"f/4","duration":"q","text":"tion"}]}]},{"id":14,"name":"We are Waiting for Jesus","source":"All Creation Sings","page":"905","score":[{"key":"G","notes":[{"key":"e/4","duration":"8","text":"We "},{"key":"f/4","duration":"8","text":"are"}],"beams":[[0,1]]},{"notes":[{"key":"g/4","duration":"h","text":"waiting -"},{"key":"e/4","duration":"q","text":"ing"},{"key":"f/4","duration":"8","text":"for"},{"key":"g/4","duration":"8","text":""}],"beams":[[2,3]],"ties":[[2,3]]},{"notes":[{"key":"a/4","duration":"q","dots":1,"text":"Je"},{"key":"g/4","duration":"8","text":"-"},{"key":"f/4","duration":"h","text":"sus"}],"ties":[[0,1]]}]},{"id":15,"name":"Lam of God","source":"All Creation Sings","page":"905","score":[{"key":"F","notes":[{"key":"f/4","duration":"8","text":"Lamb"},{"key":"g/4","duration":"8","text":"of"},{"key":"a/4","duration":"8","text":"God"},{"key":"a/4","duration":"8","text":"you"},{"key":"a/4","duration":"8","text":"take"},{"key":"g/4","duration":"8","text":"a -"},{"key":"a/4","duration":"q","dots":1,"text":"way"},{"key":"g/4","duration":"8","text":"the"}],"beams":[[0,3],[4,5]]}]}]')},355:function(t,e,o){},396:function(t,e,o){"use strict";var n=o(10),r=o(181),a=o(8),i=o(27),u=o(397),s=o(21),d=o(51),y=o(182);r("search",(function(t,e,o){return[function(e){var o=i(this),r=null==e?void 0:d(e,t);return r?n(r,e,o):new RegExp(e)[t](s(o))},function(t){var n=a(this),r=s(t),i=o(e,n,r);if(i.done)return i.value;var d=n.lastIndex;u(d,0)||(n.lastIndex=0);var c=y(n,r);return u(n.lastIndex,d)||(n.lastIndex=d),null===c?-1:c.index}]}))},397:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},398:function(t,e,o){"use strict";o(355)},405:function(t,e,o){"use strict";o.r(e);o(37),o(38),o(6),o(56),o(15),o(18);var n=o(77);o(28),o(396),o(84),o(329),o(330),o(331),o(332);var r=o(337),a={name:"LiturgySearch",data:function(){return{query:"",options:r}},props:{},computed:{results:function(){var t=[];if(this.query.length<2)return[];var e,o=function(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=Object(n.a)(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return u=t.done,t},e:function(t){s=!0,i=t},f:function(){try{u||null==o.return||o.return()}finally{if(s)throw i}}}}(this.options);try{for(o.s();!(e=o.n()).done;){var r=e.value;-1!=r.name.search(new RegExp(this.query,"i"))&&t.push(r)}}catch(t){o.e(t)}finally{o.f()}return t}},methods:{testIt:function(){}}},i=(o(398),o(49)),u=Object(i.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("label",[t._v("\n      Search Liturgy: \n      "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),t._v(" "),t._l(t.results,(function(e){return o("div",{key:e.id,staticClass:"music-result"},[o("code",[t._v(t._s(e.name))]),t._v(" "),o("code",[t._v("from "+t._s(e.source)+", page "+t._s(e.page))]),t._v(" "),o("VexFlow",{attrs:{measures:e.score,"score-id":e.id,"system-width":700}})],1)}))],2)}),[],!1,null,"3e8d42f0",null);e.default=u.exports}}]);