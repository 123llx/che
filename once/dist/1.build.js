webpackJsonp([1],{32:function(t,e,i){"use strict";function a(t){i(64)}Object.defineProperty(e,"__esModule",{value:!0});var n=i(40),r=i(70),o=i(6),c=a,s=o(n.a,r.a,!1,c,"data-v-14a5beb4",null);e.default=s.exports},40:function(t,e,i){"use strict";var a=i(66),n=i(7),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e.a={data:function(){return{topList:"",carId:"地区返回id"}},computed:r({},Object(n.e)({isShowCity:function(t){return t.quotation.isShowCity},currentCity:function(t){return t.quotation.currentCity},city:function(t){return t.quotation.city},listMin:function(t){return t.detail.listMin}})),methods:r({},Object(n.b)({getDetaiData:"detail/getDetaiData"}),Object(n.d)({showCity:"quotation/showCity"})),mounted:function(){this.getDetaiData(this.$route.query),console.log(this.listMin)},components:{citySelect:a.a}}},41:function(t,e,i){"use strict";var a=i(7),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e.a={computed:n({},Object(a.e)({provinces:function(t){return t.city.provinces},cities:function(t){return t.city.cities},isShowCity:function(t){return t.city.isShowCity}})),methods:n({},Object(a.b)({getCityList:"city/getCityList"}),Object(a.d)({updateCity:"quotation/updateCity",showCity:"quotation/showCity",hideCity:"city/hideCity"}),{cityClick:function(t){this.hideCity(),t.currentTarget==t.target||"LI"==t.target.tagName&&this.updateCity({id:t.target.dataset.id,name:t.target.innerText})}}),mounted:function(){this.getCityList()}}},64:function(t,e,i){var a=i(65);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(5)("d0821d1a",a,!0,{})},65:function(t,e,i){e=t.exports=i(4)(!1),e.push([t.i,'.wrap[data-v-14a5beb4]{width:100%;height:100%;overflow:hidden;font-size:.32rem;display:flex;flex-direction:column;position:relative}.wrap header[data-v-14a5beb4]{height:.6rem;line-height:.6rem;width:100%;background:#79cd92;text-align:center;z-index:99}.wrap header p[data-v-14a5beb4]{color:#fff;font-size:.3rem;display:inline-block}.wrap .content[data-v-14a5beb4]{flex:1;overflow:hidden;width:100%;height:auto;background:#f4f4f4;overflow-y:scroll}.wrap .content .q-info[data-v-14a5beb4]{display:flex;background:#fff;padding:.32rem .18rem .24rem;position:relative;height:2rem;box-sizing:border-box}.wrap .content .q-info img[data-v-14a5beb4]{width:2.3rem;height:1.41rem;border:1px solid #eee;box-sizing:border-box;border-radius:5px}.wrap .content .q-info div[data-v-14a5beb4]{margin-left:.2rem;width:4.3rem}.wrap .content .q-info div p[data-v-14a5beb4]:first-child{font-size:.36rem;line-height:1}.wrap .content .q-info div p[data-v-14a5beb4]:nth-child(2){margin-top:.26rem;font-size:.32rem;line-height:1.2;color:#333}.wrap .content .self-info .tip[data-v-14a5beb4]{height:.5rem;line-height:.5rem;padding:0 .2rem;font-size:.24rem;color:#666;background:#eee}.wrap .content .self-info ul[data-v-14a5beb4]{background:#fff;padding:0 .2rem}.wrap .content .self-info ul li[data-v-14a5beb4]{font-size:.32rem;height:.88rem;line-height:.88rem;border-bottom:1px solid #eee;box-sizing:border-box;color:#000}.wrap .content .self-info ul li span[data-v-14a5beb4]:nth-child(2){display:inline-block;width:88%;color:#555;text-align:right;box-sizing:border-box}.wrap .content .self-info ul li input[data-v-14a5beb4]{font-size:.32rem;padding-right:.2rem;width:88%;text-align:right;box-sizing:border-box;color:#555;outline:none;-webkit-appearance:none;border:none}.wrap .content .self-info .quotation[data-v-14a5beb4]{background:#fff;text-align:center;padding-top:.3rem;padding-bottom:.28rem}.wrap .content .self-info .quotation button[data-v-14a5beb4]{font-size:.32rem;color:#fff;width:80%;background:#3aacff;height:.7rem;border-radius:.1rem;outline:none;-webkit-appearance:none;border:none}.wrap .content .dealer-info p[data-v-14a5beb4]{padding:0 .2rem;height:.5rem;line-height:.5rem;font-size:.24rem;color:#666;background:#eee}.wrap .content .dealer-info ul[data-v-14a5beb4]{background:#fff;padding:0 .18rem}.wrap .content .dealer-info ul li[data-v-14a5beb4]:after{content:"";display:inline-block;width:.32rem;height:.32rem;border-radius:50%;border:2px solid #ccc;box-sizing:border-box;position:absolute;left:.05rem;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.wrap .content .dealer-info ul li[data-v-14a5beb4]{z-index:999;background:#fff;position:relative;padding:.26rem 0 .26rem .54rem;border-bottom:1px solid #eee;box-sizing:border-box;height:1.65rem}.wrap .content .dealer-info ul li p[data-v-14a5beb4]:first-child{font-size:.3rem}.wrap .content .dealer-info ul li p:first-child span[data-v-14a5beb4]:last-child{font-size:.24rem;float:right;color:red}.wrap .content .dealer-info ul li p[data-v-14a5beb4]:nth-child(2){margin-top:.1rem;font-size:.24rem;color:#a2a2a2}.wrap .content .dealer-info ul li p:nth-child(2) span[data-v-14a5beb4]:first-child{display:inline-block;max-width:4.6rem}.wrap .content .dealer-info ul li p:nth-child(2) span[data-v-14a5beb4]:nth-child(2){float:right}.wrap footer[data-v-14a5beb4]{width:100%;z-index:99;height:1rem;line-height:1rem}.wrap footer button[data-v-14a5beb4]{width:100%;height:1rem;line-height:1rem;background:#3aacff;text-align:center;font-size:.34rem;color:#fff;outline:none;border:none}',""])},66:function(t,e,i){"use strict";function a(t){i(67)}var n=i(41),r=i(69),o=i(6),c=a,s=o(n.a,r.a,!1,c,"data-v-20a620fc",null);e.a=s.exports},67:function(t,e,i){var a=i(68);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(5)("17fd92a0",a,!0,{})},68:function(t,e,i){e=t.exports=i(4)(!1),e.push([t.i,'.cityList[data-v-20a620fc]{z-index:999;position:fixed;top:0;left:0;width:100%;height:100%;transition:all .3s ease;transform:translate3d(0,100%,0);background:#fff}.province[data-v-20a620fc]{height:100%;overflow-y:scroll}li[data-v-20a620fc]{padding-left:.3rem;font-size:.28rem;height:.8rem;line-height:.8rem;border-bottom:1px solid #eee;box-sizing:border-box;margin-left:.1rem;position:relative}li[data-v-20a620fc]:after{content:"";display:inline-block;padding-top:.16rem;padding-right:.16rem;border-top:1px solid #999;border-right:1px solid #999;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;right:.35rem;top:.3rem}.cityList.active[data-v-20a620fc]{transform:translateZ(0)}.city[data-v-20a620fc]{overflow-y:scroll;visibility:hidden}.city>div[data-v-20a620fc],.city[data-v-20a620fc]{position:fixed;top:0;left:0;width:100%;height:100%}.city>div[data-v-20a620fc]{transition:all .3s ease;transform:translate3d(100%,0,0);background:#fff}.city.active[data-v-20a620fc]{background:rgba(0,0,0,.6);visibility:visible;z-index:999}.city.active>div[data-v-20a620fc]{transform:translate3d(30%,0,0)}',""])},69:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cityList"},[i("section",{staticClass:"province"},[i("ul",{on:{click:function(e){return t.getCityList(e.target.dataset.id)}}},t._l(t.provinces,function(e,a){return i("li",{key:a,attrs:{"data-id":e.CityID}},[t._v(t._s(e.CityName))])}))]),t._v(" "),i("section",{class:t.isShowCity?"active city":"city",on:{click:t.cityClick}},[i("div",t._l(t.cities,function(e,a){return i("li",{key:a,attrs:{"data-id":e.CityID}},[t._v(t._s(e.CityName))])}))])])},n=[],r={render:a,staticRenderFns:n};e.a=r},70:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[t._m(0),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"q-info"},[i("img",{attrs:{src:t.listMin.Picture,alt:""}}),t._v(" "),i("div",{},[i("p",[t._v(t._s(t.listMin.AliasName))]),t._v(" "),i("p",[t._v("2018款 30周年版 30 TFSI 进取版")])])]),t._v(" "),i("div",{staticClass:"self-info"},[i("p",{staticClass:"tip"},[t._v("个人信息")]),t._v(" "),i("ul",[t._m(1),t._v(" "),t._m(2),t._v(" "),i("li",[i("span",[t._v("城市")]),i("span",{on:{click:function(e){t.showCity(!0)}}},[t._v(t._s(t.currentCity?t.currentCity:t.city.name+t.city.id))])])]),t._v(" "),t._m(3)]),t._v(" "),t._m(4)]),t._v(" "),t._m(5),t._v(" "),i("citySelect",{class:t.isShowCity?"active":""})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("p",[t._v("可向多个商家咨询最低价，商家及时回复")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("span",[t._v("姓名")]),i("input",{attrs:{type:"text",placeholder:"输入你的真实中文姓名",maxlength:"4"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("span",[t._v("手机")]),i("input",{attrs:{type:"text",placeholder:"输入你的真实手机号码",maxlength:"11"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"quotation"},[i("button",[t._v("询最低价")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dealer-info"},[i("p",[t._v("选择报价经销商")]),t._v(" "),i("ul",[i("li",[i("p",[i("span",[t._v("北京安洋伟业")]),i("span",[t._v("23.42万")])]),t._v(" "),i("p",[i("span",[t._v("北京市大兴区黄村镇狼垡芦花路临52号")]),i("span",[t._v("售本市")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("button",[t._v("询最低价")])])}],r={render:a,staticRenderFns:n};e.a=r}});
//# sourceMappingURL=1.build.js.map