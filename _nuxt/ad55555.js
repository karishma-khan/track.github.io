(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{330:function(t,n,l){var content=l(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(81).default)("52208566",content,!0,{sourceMap:!1})},355:function(t,n,l){"use strict";l(330)},356:function(t,n,l){var d=l(80)((function(i){return i[1]}));d.push([t.i,"#canvas[data-v-0f35ccbb]{border:2px solid #000;border-radius:50%;height:400px;overflow:hidden;position:relative;width:400px}.ball[data-v-0f35ccbb]{background-color:red;border-radius:50%;height:20px;position:absolute;width:20px}",""]),d.locals={},t.exports=d},374:function(t,n,l){"use strict";l.r(n);l(22),l(38);var d={data:function(){return{balls:[{x:150,y:150,dx:2,dy:2},{x:100,y:100,dx:-2,dy:2},{x:200,y:200,dx:2,dy:-2}],canvasRadius:0,ballRadius:0,gravity:.1}},mounted:function(){var t=this;this.$nextTick((function(){t.canvasRadius=t.$refs.canvas.offsetWidth/2,t.ballRadius=t.$refs.ball0.offsetWidth/2,t.moveBalls()}))},methods:{moveBalls:function(){var t=this;requestAnimationFrame(this.moveBalls),this.balls.forEach((function(n,l){n.dy+=t.gravity,n.x+=n.dx,n.y+=n.dy;var d=Math.sqrt(Math.pow(n.x-t.canvasRadius,2)+Math.pow(n.y-t.canvasRadius,2));if(d+t.ballRadius>=t.canvasRadius){var o=Math.atan2(n.y-t.canvasRadius,n.x-t.canvasRadius),c=Math.cos(o),e=Math.sin(o),r=n.dx*c+n.dy*e;n.dx=n.dx-2*r*c,n.dy=n.dy-2*r*e;var f=d+t.ballRadius-t.canvasRadius;n.x-=f*c,n.y-=f*e}t.$refs["ball".concat(l)][0].style.left="".concat(n.x-t.ballRadius,"px"),t.$refs["ball".concat(l)][0].style.top="".concat(n.y-t.ballRadius,"px")}))}}},o=(l(355),l(25)),component=Object(o.a)(d,(function(){var t=this,n=t._self._c;return n("div",[n("div",{ref:"canvas",attrs:{id:"canvas"}},t._l(t.balls,(function(t,l){return n("div",{key:l,ref:"ball".concat(l),refInFor:!0,staticClass:"ball"})})),0)])}),[],!1,null,"0f35ccbb",null);n.default=component.exports}}]);