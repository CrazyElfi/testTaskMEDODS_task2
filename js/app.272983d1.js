(function(e){function t(t){for(var r,s,o=t[0],u=t[1],l=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/testTaskMEDODS_task2/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"196f":function(e,t,n){e.exports=n.p+"media/3.c1c96b44.mp3"},"3c6d":function(e,t,n){e.exports=n.p+"media/1.99e50f7d.mp3"},"3cf8":function(e,t,n){e.exports=n.p+"media/2.d2c4a2c4.mp3"},"44bb":function(e,t,n){"use strict";n("f630")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Buttons")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"simon"},[n("div",{staticClass:"btns-wrapper"},e._l(e.btnsArr,(function(t){return n("button",{key:t.id,staticClass:"btn",class:t.class,attrs:{sound:t.sound,id:t.id},on:{click:e.listenerStepUser}})})),0),n("div",{staticClass:"game-info"},[n("h1",[e._v("Simon The Game")]),n("h2",[e._v("Round: "),n("span",[e._v(e._s(e.round))])]),n("button",{attrs:{id:"btn-start",disabled:e.isDisabledBtnStart},on:{click:e.newGame}},[e._v("Start! ")]),n("div",{staticClass:"game-options"},[n("h2",[e._v("Game Options:")]),e._l(e.levels,(function(t){return n("div",{key:t.id,staticClass:"lvl-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedLevelID,expression:"selectedLevelID"}],attrs:{type:"radio",disabled:e.isDisabledBtnStart,name:"mode",id:t.id},domProps:{value:t.id,checked:e._q(e.selectedLevelID,t.id)},on:{change:function(n){e.selectedLevelID=t.id}}}),n("label",{attrs:{for:"level.id"}},[e._v(e._s(t.name))])])}))],2)])])},o=[],u=n("b85c"),l=n("1da1"),c=(n("96cf"),n("7db0"),n("d3b7"),n("a9e3"),[{id:"lvl_1",value:"easy",name:"Easy level",timeBreak:1500},{id:"lvl_2",value:"middle",name:"Middle level",timeBreak:1e3},{id:"lvl_3",value:"hard",name:"Hard level",timeBreak:400}]),d={name:"Buttons",props:{msg:String},data:function(){return{round:1,btnsArr:[{id:1,class:"red",sound:n("3c6d")},{id:2,class:"blue",sound:n("3cf8")},{id:3,class:"yellow",sound:n("196f")},{id:4,class:"green",sound:n("78fc")}],step:0,isDisabledBtnStart:!1,randomArr:[],selectedLevelTime:1500,selectedLevelID:"lvl_1",levels:c}},computed:{selectedLevel:function(){var e=this;return this.levels.find((function(t){return t.id===e.selectedLevelID}))}},methods:{newGame:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isDisabledBtnStart=!0,t.next=3,e.sleep(1e3);case 3:return e.randomArr.push(e.getRandomNumberFromArr(e.btnsArr)),t.next=6,e.showHighlightRowBtn(e.randomArr);case 6:case"end":return t.stop()}}),t)})))()},showHighlightRowBtn:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=Object(u["a"])(e),n.prev=1,r.s();case 3:if((a=r.n()).done){n.next=15;break}return i=a.value,t.highlightBtn(i),n.next=8,t.playSound(i);case 8:return n.next=10,t.sleep(t.selectedLevel.timeBreak);case 10:return t.removeHighlight(i),n.next=13,t.sleep(700);case 13:n.next=3;break;case 15:n.next=20;break;case 17:n.prev=17,n.t0=n["catch"](1),r.e(n.t0);case 20:return n.prev=20,r.f(),n.finish(20);case 23:case"end":return n.stop()}}),n,null,[[1,17,20,23]])})))()},getRandomNumberFromArr:function(e){return Math.floor(Math.random()*e.length+1)},sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},highlightBtn:function(e){var t=document.getElementById(e);t.classList.add("highlight")},removeHighlight:function(e){var t=document.getElementById(e);t.classList.remove("highlight")},listenerStepUser:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.isDisabledBtnStart){n.next=6;break}return r=Number(e.target.id),n.next=4,t.playSound(r);case 4:r===t.randomArr[t.step]?t.step++:(alert("Game over! =("),t.isDisabledBtnStart=!1,t.round=1,t.randomArr=[]),t.step===t.randomArr.length&&(t.round++,t.step=0,t.newGame());case 6:case"end":return n.stop()}}),n)})))()},playSound:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e-1,a=t.btnsArr[r].sound,!a){n.next=6;break}return i=new Audio(a),n.next=6,i.play();case 6:case"end":return n.stop()}}),n)})))()}}},p=d,f=(n("44bb"),n("2877")),m=Object(f["a"])(p,s,o,!1,null,"71397716",null),v=m.exports,h={name:"App",components:{Buttons:v}},b=h,g=(n("034f"),Object(f["a"])(b,a,i,!1,null,null,null)),w=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(w)}}).$mount("#app")},"78fc":function(e,t,n){e.exports=n.p+"media/4.36d5a722.mp3"},"85ec":function(e,t,n){},f630:function(e,t,n){}});