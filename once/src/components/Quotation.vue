<template>
  <div class="wrap"> 
     <header>
        <p>可向多个商家咨询最低价，商家及时回复</p>
      </header>
      <div class="content">
        <div class="q-info"> 
             <img :src="listMin.Picture" alt="">
             <div class="">
               <p>{{listMin.AliasName}}</p>
               <p>2018款 30周年版 30 TFSI 进取版</p>
             </div>
        </div>
        <div class="self-info"> 
          <p class="tip">个人信息</p>
          <ul>
            <li><span>姓名</span><input type="text" placeholder="输入你的真实中文姓名" maxlength="4"></li>
            <li><span>手机</span><input type="text" placeholder="输入你的真实手机号码" maxlength="11"></li>
             <li><span>城市</span><span  @click="showCity(true)">{{currentCity?currentCity:city.name+city.id}}</span></li>
          </ul>
          <div class="quotation">
              <button>询最低价</button>
          </div>
        </div>
        <div class="dealer-info">
            <p>选择报价经销商</p>
            <ul>
       <li>
           <p><span>北京安洋伟业</span><span>23.42万</span></p>
           <p><span>北京市大兴区黄村镇狼垡芦花路临52号</span><span>售本市</span></p>
       </li>
            </ul>
        </div>
      </div>
      <footer>
        <button>询最低价</button>
      </footer>
       <citySelect :class=" isShowCity?'active':''"></citySelect>
  </div>
</template>

<script>
import citySelect from "./common/citySelect.vue";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      topList: "",
      carId: "地区返回id"
    };
  },
  computed: {
    ...mapState({
      isShowCity: state => state.quotation.isShowCity,
      currentCity: state => state.quotation.currentCity,
      city: state => state.quotation.city,
      listMin: state => state.detail.listMin
    })
  },
  methods: {
    ...mapActions({
      getDetaiData: "detail/getDetaiData"
    }),
    ...mapMutations({
      showCity: "quotation/showCity"
      // getDetaiData: "detail/getDetaiData"
    })
  },
  mounted() {
    this.getDetaiData(this.$route.query);
    console.log(this.listMin);
  },
  components: {
    citySelect
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 0.32rem;
  display: flex;
  flex-direction: column;
  position: relative;

  header {
    height: 0.6rem;
    line-height: 0.6rem;
    width: 100%;
    background: #79cd92;
    text-align: center;
    z-index: 99;

    p {
      color: #fff;
      font-size: 0.3rem;
      display: inline-block;
    }
  }

  .content {
    flex: 1;
    overflow: hidden;
    width: 100%;
    height: auto;
    background: #f4f4f4;
    overflow-y: scroll;
    .q-info {
      display: flex;
      background: #fff;
      padding: 0.32rem 0.18rem 0.24rem;
      position: relative;
      height: 2rem;
      box-sizing: border-box;
      img {
        width: 2.3rem;
        height: 1.41rem;
        border: 1px solid #eee;
        box-sizing: border-box;
        border-radius: 5px;
      }
      div {
        margin-left: 0.2rem;
        width: 4.3rem;
        p:first-child {
          font-size: 0.36rem;
          line-height: 1;
        }
        p:nth-child(2) {
          margin-top: 0.26rem;
          font-size: 0.32rem;
          line-height: 1.2;
          color: #333;
        }
      }
    }
    .self-info {
      .tip {
        height: 0.5rem;
        line-height: 0.5rem;
        padding: 0 0.2rem;
        font-size: 0.24rem;
        color: #666;
        background: #eee;
      }
      ul {
        background: #fff;
        padding: 0 0.2rem;
        li {
          font-size: 0.32rem;
          height: 0.88rem;
          line-height: 0.88rem;
          border-bottom: 1px solid #eee;
          box-sizing: border-box;
          color: #000;
          span:nth-child(2) {
            display: inline-block;
            width: 88%;
            color: #555;
            text-align: right;
            box-sizing: border-box;
          }
          input {
            font-size: 0.32rem;
            padding-right: 0.2rem;
            width: 88%;
            text-align: right;
            box-sizing: border-box;
            color: #555;
            outline: none;
            -webkit-appearance: none;
            border: none;
          }
        }
      }
      .quotation {
        background: #fff;
        text-align: center;
        padding-top: 0.3rem;
        padding-bottom: 0.28rem;
        button {
          font-size: 0.32rem;
          color: #fff;
          width: 80%;
          background: #3aacff;
          height: 0.7rem;
          border-radius: 0.1rem;
          outline: none;
          -webkit-appearance: none;
          border: none;
        }
      }
    }
    .dealer-info {
      p {
        padding: 0 0.2rem;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.24rem;
        color: #666;
        background: #eee;
      }
      ul {
        background: #fff;
        padding: 0 0.18rem;
        li::after {
          content: "";
          display: inline-block;
          width: 0.32rem;
          height: 0.32rem;
          border-radius: 50%;
          border: 2px solid #ccc;
          box-sizing: border-box;
          position: absolute;
          left: 0.05rem;
          top: 50%;
          -webkit-transform: translate3d(0, -50%, 0);
          transform: translate3d(0, -50%, 0);
        }
        li {
          z-index: 999;
          background: #fff;
          position: relative;
          padding: 0.26rem 0 0.26rem 0.54rem;
          border-bottom: 1px solid #eee;
          box-sizing: border-box;
          height: 1.65rem;
          p:first-child {
            font-size: 0.3rem;
            span:last-child {
              font-size: 0.24rem;
              float: right;
              color: red;
            }
          }
          p:nth-child(2) {
            margin-top: 0.1rem;
            font-size: 0.24rem;
            color: #a2a2a2;
            span:first-child {
              display: inline-block;
              max-width: 4.6rem;
            }
            span:nth-child(2) {
              float: right;
            }
          }
        }
      }
    }
  }

  footer {
    width: 100%;
    z-index: 99;
    height: 1rem;
    line-height: 1rem;
    // position: absolute;
    // bottom: 0;
    // left: 0;

    button {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      background: #3aacff;
      text-align: center;
      font-size: 0.34rem;
      color: #fff;
      outline: none;
      border: none;
    }
  }
}
</style>
