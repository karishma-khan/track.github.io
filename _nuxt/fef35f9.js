(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{302:function(t,e,r){var content=r(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("0293cd6b",content,!0,{sourceMap:!1})},318:function(t,e,r){"use strict";r(302)},319:function(t,e,r){var c=r(80)((function(i){return i[1]}));c.push([t.i,".tooltip-header[data-v-2cf9c044]{font-size:30px}#container[data-v-2cf9c044]{height:510px}.highcharts-data-table table[data-v-2cf9c044],.highcharts-figure[data-v-2cf9c044]{margin:1em auto;max-width:800px;min-width:310px}.highcharts-data-table table[data-v-2cf9c044]{border:1px solid #ebebeb;border-collapse:collapse;font-family:Verdana,sans-serif;margin:10px auto;max-width:500px;text-align:center;width:100%}.highcharts-data-table caption[data-v-2cf9c044]{color:#555;font-size:1.2em;padding:1em 0}.highcharts-data-table th[data-v-2cf9c044]{font-weight:600;padding:.5em}.highcharts-data-table caption[data-v-2cf9c044],.highcharts-data-table td[data-v-2cf9c044],.highcharts-data-table th[data-v-2cf9c044]{padding:.5em}.highcharts-data-table thead tr[data-v-2cf9c044],.highcharts-data-table tr[data-v-2cf9c044]:nth-child(2n){background:rgba(255,136,255,.533)}",""]),c.locals={},t.exports=c},342:function(t,e,r){"use strict";r.r(e);r(47),r(306);var c={mounted:function(){var t=this,e=["18-24","25-34","35-44","45-54","55-64","65+"];Highcharts.chart("container",{chart:{type:"bar",backgroundColor:"transparent"},accessibility:{point:{valueDescriptionFormat:"{index}. Age {xDescription}, {value}%."}},legend:{enabled:!1},navigation:{buttonOptions:{enabled:!1}},title:{text:null},xAxis:[{categories:e,reversed:!1,labels:{step:1}},{opposite:!0,reversed:!1,categories:e,linkedTo:0,labels:{step:1}}],yAxis:{title:{text:null},labels:{format:"{value}%"}},plotOptions:{series:{stacking:"normal",pointWidth:76,borderRadius:"12px"}},tooltip:{useHTML:!0,backgroundColor:"black",borderRadius:16,padding:15,style:{color:"white",width:"300px",borderRadius:"16px"},headerFormat:'<div class="tooltip-header text-[15px] mb-2" style="color:#FFFFFF80"> <span class="mdi mdi-account-multiple"></span> Demographics </div>',pointFormat:'<div  style="color:#FFFFFF90" class="block">On average, <b class="text-white">{point.y:.1f}% {series.name}</b> audience between the age of <b class="text-white"> {point.category} </b> were targeted for the ads during <b class="text-white"> 12 March 2022 to 16 March 2022. </b></div>'},series:[{name:"Male",data:[-28,-35,-31,-42,-31,-12].map((function(e,r){return{y:e,color:t.barColors[r]||"#7cb5ec"}}))},{name:"Female",data:[34,18,25,32,24,17].map((function(e,r){return{y:e,color:t.barColors[r]||"#434348"}}))}]})},data:function(){return{barColors:["#C5D6B6","#81C2A7","#4CB2AC","#326284","#162C3B","#00060B"]}}},o=(r(318),r(25)),component=Object(o.a)(c,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"highcharts-figure"},[t("div",{attrs:{id:"container"}})])}],!1,null,"2cf9c044",null);e.default=component.exports}}]);