<template>
  <div class="header">
      <div class="warp">
          <div class="left">
              <div class="left_logo">
                  <img src="@/assets/logo.png" alt="">
              </div>
              <div class="left_txt">
                  <img class="pic_t1" src="@/assets/image/header/title.png" alt="">
                  <img class="pic_t2" src="@/assets/image/header/title2.png" alt="">
              </div>
            </div>
          <div class="right">
              <div class="item" v-for="(item, index) in nav" :key="index">
                  <div :class="{'active': item.active, 'hover': item.isChilren}" @click="handle(item)">{{ item.title }}
                      <div class="children" :class="{'toright': (item.title=='成果转化')}" v-if="item.children">
                          <div class="item_children" v-for="(itemChildren,indexChildren) in item.children" :key="indexChildren" @click.stop="linkTo(itemChildren)">{{itemChildren.title}}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            nav: [
                { title: '首页', active: false, path: '/' },
                { title: '可运营专利', active: false, path: '/operationalPt/list' },
                {
                    title: '高价值专利培养',
                    active: false,
                    path: '/culturePt/demand',
                    isChilren: true,
                    children: [
                        { title: '培育需求', active: false, path: '/culturePt/demand' },
                        { title: '成果展示', active: false, path: '/culturePt/achievements' },
                        { title: '相关政策', active: false, path: '/culturePt/policy' },
                        { title: '培育方法', active: false, path: '/culturePt/way' }
                    ]
                },
                {
                    title: '成果转化',
                    active: false,
                    path: '/change/demand',
                    isChilren: true,
                    children: [
                        { title: '成果转化需求', active: false, path: '/change/demand' },
                        { title: '科技成果展示', active: false, path: '/change/achievements' },
                        { title: '成果转化资讯', active: false, path: '/change/information' }
                    ]
                },
                { title: '知识产权交流', active: false, path: '/communication' },
                { title: '平台介绍', active: false, path: '/introduce' },
                {
                    title: '入驻平台',
                    active: false,
                    path: '/settleIn',
                    isChilren: true
                    // children: [
                    //     { title: '入驻单位展示', active: false, path: '/' },
                    //     { title: '入驻申请须知', active: false, path: '' }
                    // ]
                }
            ]
        }
    },
    watch: {
        $route: {
            handler: function (val) {
                this.nav.forEach(item => {
                    item.active = false
                })
                for (let i = 0; i < this.nav.length; i++) {
                    if (val.path.indexOf('/operationalPt') !== -1) {
                        this.nav[1].active = true
                        break
                    } else if (val.path.indexOf('/culturePt') !== -1) {
                        this.nav[2].active = true
                        break
                    } else if (val.path.indexOf('/change') !== -1) {
                        this.nav[3].active = true
                        break
                    } else if (this.nav[i].path === val.path) {
                        this.nav[i].active = true
                        break
                    }
                }
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        handle (item) {
            const that = this
            that.nav.forEach(item => {
                item.active = false
            })
            item.active = true
            this.$router.push({ path: item.path })
        },
        linkTo (itemSub) {
            this.$router.push({ path: itemSub.path })
        }
    }
}
</script>

<style lang='scss' scoped>
.header{
    // width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
    .warp{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .left{
            display: flex;
            align-items: center;
            height: 70px;
            .left_logo{
                img{
                    width: 32px;
                    margin-right: 10px;
                }
            }
            .left_txt{
                .pic_t1{
                    width: 250px;
                    height: 18px;
                    margin-bottom: 2px;
                    display: block;
                }
                .pic_t2{
                    display: block;
                    width: 250px;
                    height: 8px;
                }
            }
        }
        .right{
            display: flex;
            height: 70px;
            margin-left: 90px;
            .item{
                box-sizing: border-box;
                margin-left: 40px;
                color: #333;
                font-size: 16px;
                line-height: 67px;
                cursor: pointer;
                position: relative;
                .children{
                    position: absolute;
                    width: 120px;
                    background-color: #fff;
                    line-height: 40px;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    display: none;
                    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    z-index: 9;
                    .item_children{
                        color: #333;
                        font-size: 18px;
                        font-weight: 400;
                        &:hover{
                            background-color: $mainColor;
                            color: #fff;
                        }
                    }
                }
                .toright{
                    right: -28px;
                }
                &:hover{
                    color: $mainColor;
                    // border-bottom: 3px solid $mainColor;
                    font-weight: 700;
                }
                .active{
                    color: $mainColor;
                    border-bottom: 3px solid $mainColor;
                    font-weight: 700;
                }
                .hover{
                    &:hover{
                        font-weight: 700;
                        .children{
                            display: block;
                        }
                    }
                }
            }
        }
    }
}
</style>
