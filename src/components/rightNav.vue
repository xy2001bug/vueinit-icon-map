<template>
  <div class="nav">
      <div class="static">
            <div @click="handerShowPop">
              <img src="@/assets/image/rightNav/msg_icon.png" class="zixun" alt="">
            </div>
          <div class="img_bg" @click="toTop">
              <img class="top_pic" src="@/assets/image/rightNav/top.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    methods: {
        toTop () {
            document.documentElement.scrollTop = 0
        },
        handerShowPop () {
            this.$emit('show')
        }
    }
}
</script>

<style lang='scss' scoped>
.nav{
    height: 300px;
    .static{
        display: flex;
        flex-direction: column;
        align-items: center;
        .zixun{
            height: 104px;
            width: 64px;
            padding-right: 2px;
            cursor: pointer;
        }
        img{
            display: block;
        }
        .img_bg{
            cursor: pointer;
            .top_pic{
                height: 64px;
                width: 64px;
            }
        }
    }
}
</style>
