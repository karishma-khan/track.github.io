(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{303:function(t,o,e){var content=e(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(81).default)("590cc724",content,!0,{sourceMap:!1})},320:function(t,o,e){"use strict";e(303)},321:function(t,o,e){var n=e(80)((function(i){return i[1]}));n.push([t.i,'.main[data-v-b4f77d00]{display:flex;justify-content:center;--s:50px;--m:1px;--f:calc(var(--s)*1.732 + var(--m)*4 - 1px)}.containerWall[data-v-b4f77d00]{font-size:0}.containerWall div[data-v-b4f77d00]{clip-path:polygon(0 25%,0 75%,50% 100%,100% 75%,100% 25%,50% 0);display:inline-block;font-size:medium;height:calc(var(--s)*1.1547);margin:var(--m);margin-bottom:calc(var(--m) - var(--s)*.2885);width:var(--s)}.containerWall[data-v-b4f77d00]:before{content:"";float:left;height:200%;shape-outside:repeating-linear-gradient(transparent 0 calc(var(--f) - 3px),#000 0 var(--f));width:calc(var(--s)/2 + var(--m))}.hexagon[data-v-b4f77d00]{background-position:50%;background-size:cover}.card[data-v-b4f77d00]{background-color:transparent;border-radius:10px;margin:auto;max-width:100%;padding:20px}.tooltip[data-v-b4f77d00]{background-color:#fff;border-radius:4px;color:#fff;padding:5px 10px;pointer-events:none;position:absolute;transform:translate(-50%,-100%);white-space:nowrap;z-index:1000}',""]),n.locals={},t.exports=n},344:function(t,o,e){"use strict";e.r(o);e(64),e(40);var n={data:function(){return{title:"Image Wall",items:Array.from({length:100},(function(t,i){return i})),tooltip:{visible:!1,text:"",x:0,y:0}}},methods:{showTooltip:function(t,text){console.log("inside",t.pageX,t.pageY),this.tooltip.text=text,this.tooltip.visible=!0,this.updateTooltipPosition(t)},updateTooltipPosition:function(t){this.tooltip.x=t.pageX+10,this.tooltip.y=t.pageY+10},hideTooltip:function(){this.tooltip.visible=!1}}},l=(e(320),e(25)),component=Object(l.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"bg-[#FFFBEF] text-black common-container",staticStyle:{overflow:"unset"}},[o("div",{staticClass:"flex gap-4 mb-8"},[o("img",{attrs:{src:"img/imageGallery.svg",alt:""}}),t._v(" "),o("span",{staticClass:"common-heading"},[t._v("\n      "+t._s(t.title)+"\n    ")])]),t._v(" "),o("div",{staticClass:"card"},[o("div",{staticClass:"main flex"},[o("div",{staticClass:"containerWall",on:{mouseleave:t.hideTooltip}},t._l(t.items,(function(e,n){return o("div",{key:n,staticClass:"hexagon",style:{backgroundImage:"url(https://picsum.photos/200/300)"},on:{mouseenter:function(o){return t.showTooltip(o,"Action #"+e)},mouseover:function(o){return t.updateTooltipPosition(o)},mouseleave:t.hideTooltip}})})),0)])]),t._v(" "),t._e()])}),[],!1,null,"b4f77d00",null);o.default=component.exports}}]);