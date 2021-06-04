<template>
  <div class="footer">
      <div class="title">
          <img class="t_pic" src="@/assets/image/footer/f_title.png" alt="">
      </div>
      <div class="con">
          <div class="c_info">
              <div class="row">
                  <img src="../../../assets/image/footer/phone_cion.png" alt="">
                  <span>189 10001 1971</span>
              </div>
              <div class="row">
                  <img src="../../../assets/image/footer/email_icon.png" alt="">
                  <span>1369819805@qq.com</span>
              </div>
              <div class="row">
                  <img src="../../../assets/image/footer/adr_icon.png" alt="">
                  <span>东莞市松山湖园区总部二路9号1栋4单元307室</span>
              </div>
          </div>
          <div class="gun1"></div>
          <div class="c_nav">
              <div class="c_items" v-for="(item,index) in nav" :key="index" @click="link(item)">{{ item.title }}</div>
          </div>
          <div class="gun2"></div>
          <div class="c_code">
              <img src="../../../assets/image/footer/code.png" alt="">
              <span>微信公众</span>
          </div>
      </div>
      <div class="more">
          <div>版权所有：东莞三航军民融合创新研究院</div>
          <div>联合单位：广东高航知识产权服务有限公司</div>
          <div>此处有备案号写上还没备案号的话暂且空着</div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            nav: [
                { title: '专利运营', path: '/operationalPt/list' },
                { title: '成果转化', path: '/change/demand' },
                { title: '高价值专利培养', path: '/culturePt/demand' },
                { title: '平台介绍', path: '/introduce' },
                { title: '知识产权交流', path: '/communication' },
                { title: '入驻平台', path: '/settleIn' }
            ]
        }
    },
    methods: {
        link (item) {
            this.$router.push({ path: item.path })
        }
    }
}
</script>

<style lang='scss' scoped>
.footer{
    width: 100%;
    height: 263px;
    min-width: 1310px;
    box-sizing: border-box;
    background-color: #222;
    .title{
        width: 1200px;
        margin: 0px auto;
        padding: 22px 0;
        text-align: center;
        .t_pic{
            width: 277px;
            height: auto;
        }
    }
    .con{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        color: #fff;
        .c_info{
            width: 360px;
            .row{
                display: flex;
                align-items: center;
                padding-bottom: 20px;
                > span{
                    padding-left: 10px;
                    opacity: .6;
                }
            }
        }
        .c_nav{
            width: 330px;
            opacity: .6;
            display: flex;
            flex-wrap: wrap;
            .c_items{
                width: 175px;
                line-height: 22px;
                padding-bottom: 18px;
                cursor: pointer;
                &:nth-child(2n){
                    width: 150px;
                }
            }
        }
        .c_code{
            flex: 1;
            > img{
                width: 100px;
                height: 100px;
            }
            span{
                padding: 0px 0 0 20px;
                opacity: .6;
            }
        }
        .gun1{
            background-color: #fff;
            width: 1px;
            height: 80px;
            margin: 20px 90px 20px 40px;
            opacity: .3;
        }
        .gun2{
            background-color: #fff;
            width: 1px;
            height: 80px;
            margin: 20px 95px 20px 0px;
            opacity: .3;
        }
    }
    .more{
        color: #fff;
        width: 1200px;
        margin: 0 auto;
        border-top: 1px solid #fff;
        opacity: .2;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        font-size: 12px;
        > div{
            padding-left: 30px;
            &:first-child{
                padding-left: 0;
            }
        }
    }
}
</style>
