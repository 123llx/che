webpackJsonp([5],{28:function(t,e,i){"use strict";function r(t){i(52)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(36),o=i(54),n=i(6),d=r,s=n(a.a,o.a,!1,d,"data-v-337df121",null);e.default=s.exports},36:function(t,e,i){"use strict";var r=i(7),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t};e.a={data:function(){return{id:""}},computed:a({},Object(r.e)({listMin:function(t){return t.detail.listMin},currentYear:function(t){return t.detail.currentYear}}),Object(r.c)({years:"detail/years",lists:"detail/lists"})),methods:a({},Object(r.b)({getDetaiData:"detail/getDetaiData"}),Object(r.d)({changeYear:"detail/changeYear"})),mounted:function(){this.getDetaiData(this.$route.query),this.id=this.$route.query.id},beforeRouteEnter:function(t,e,i){i()},beforeRouteLeave:function(t,e,i){i()}}},52:function(t,e,i){var r=i(53);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(5)("31996632",r,!0,{})},53:function(t,e,i){e=t.exports=i(4)(!1),e.push([t.i,".wrap[data-v-337df121]{width:100%;height:100%;overflow:hidden;background:#eee}.wrap>.scroll[data-v-337df121]{width:100%;height:100%;overflow-y:scroll}.wrap .img[data-v-337df121]{display:flex;position:relative;height:3.29rem;overflow:hidden}.wrap .img img[data-v-337df121]{width:100%;top:50%;transform:translateY(-52%);position:absolute}.wrap .info[data-v-337df121]{display:flex;width:100%;padding:.36rem .2rem .3rem;background:#fff;margin-top:.1rem}.wrap .info p[data-v-337df121]{font-size:.26rem;color:silver}.wrap .info p[data-v-337df121]:first-child{font-size:.36rem;color:red;font-weight:500}.wrap .info .action[data-v-337df121]{position:relative;padding-top:.2rem;width:50%}.wrap .info .action button[data-v-337df121]{position:absolute;top:0;right:0;background:#00afff;color:#fff;border-radius:.1rem;font-size:.32rem;height:.7rem;width:3.45rem;border:none;box-sizing:border-box;outline:none}.wrap .cart-list[data-v-337df121]{display:flex;flex-direction:column}.wrap .cart-list .type[data-v-337df121]{flex:1;border-top:.15rem solid #f4f4f4;padding:0 .3rem;font-size:.32rem;height:.77rem;line-height:.77rem;background:#fff}.wrap .cart-list .type span[data-v-337df121]{padding-right:.46rem;font-size:.32rem}.wrap .cart-list ul>p[data-v-337df121]{padding:0 .2rem;height:.5rem;line-height:.5rem;font-size:.26rem;color:#999;background:#f4f4f4}.wrap .cart-list ul>li[data-v-337df121]{padding:0 .2rem;border-bottom:.18rem solid #f4f4f4;background:#fff;overflow:hidden}.wrap .cart-list ul>li p[data-v-337df121]:first-child{padding:.26rem 0 .18rem;font-size:.3rem;line-height:1;color:#3d3d3d}.wrap .cart-list ul>li p[data-v-337df121]:nth-child(2){color:#bdbdbd;font-size:.26rem}.wrap .cart-list ul>li p[data-v-337df121]:nth-child(3){text-align:right;padding-bottom:.1rem;font-size:.24rem;color:#818181}.wrap .cart-list ul>li p:nth-child(3) span[data-v-337df121]:nth-child(2){font-size:.3rem;color:#ff2336;margin-left:.1rem}.wrap .cart-list ul>li button[data-v-337df121]{border:none;border-top:1px solid #eee;width:110%;height:.8rem;font-size:.32rem;color:#00afff;background:#fff;font-weight:500;margin-left:-.3rem;outline:none}.wrap .cart-list ul>li[data-v-337df121]:last-child{border-bottom:0}.type>span.active[data-v-337df121]{color:#3aacff}.bottom[data-v-337df121]{display:block;position:fixed;width:100%;bottom:0;z-index:99;background:#3aacff;height:1rem;color:#fff;text-align:center;text-decoration:none}.bottom p[data-v-337df121]:first-child{font-size:.32rem;margin-top:.12rem;font-weight:500}.bottom p[data-v-337df121]:nth-child(2){font-size:.24rem}",""])},54:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"scroll"},[i("div",[i("router-link",{staticClass:"img",attrs:{to:{path:"/img",query:{id:t.id}}}},[i("img",{attrs:{src:t.listMin.CoverPhoto}})]),t._v(" "),i("div",{staticClass:"info"},[i("div",[i("p",[t._v(t._s(t.listMin.market_attribute&&t.listMin.market_attribute.dealer_price))]),t._v(" "),i("p",[t._v("指导价格："+t._s(t.listMin.market_attribute&&t.listMin.market_attribute.official_refer_price))])]),t._v(" "),i("div",{staticClass:"action"},[i("button",[t._v(t._s(t.listMin.BottomEntranceTitle))])])]),t._v(" "),i("div",{staticClass:"cart-list"},[i("div",{staticClass:"type"},t._l(t.years,function(e,r){return i("span",{key:r,class:t.currentYear==e?"active":"",on:{click:function(i){t.changeYear(e)}}},[t._v(t._s(e))])})),t._v(" "),i("section",[i("div",t._l(t.lists,function(e,r){return i("ul",{key:r},[i("p",[t._v(t._s(r))]),t._v(" "),t._l(e,function(e,r){return i("li",{key:r},[i("p",[t._v(t._s(e.market_attribute.year+"款 "+e.car_name))]),t._v(" "),i("p",[t._v(t._s(e.max_power+"马力"+e.gear_num+"档"+e.trans_type))]),t._v(" "),i("p",[i("span",[t._v(t._s("指导价"+e.market_attribute.dealer_price_min))]),t._v(" "),i("span",[t._v(t._s(e.market_attribute.official_refer_price)+"起")])]),t._v(" "),i("button",[t._v("询问底价")])])})],2)}))])])],1)]),t._v(" "),i("router-link",{staticClass:"bottom",attrs:{to:{path:"/quotation",query:{id:t.id}}}},[i("p",[t._v("询问低价")]),t._v(" "),i("p",[t._v("本地经销商为你报价")])])],1)},a=[],o={render:r,staticRenderFns:a};e.a=o}});
//# sourceMappingURL=5.build.js.map