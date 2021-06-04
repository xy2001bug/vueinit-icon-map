<template>
  <div class="layout">
      <div>
          <Header></Header>
      </div>
      <div>
          <router-view/>
      </div>
      <right-nav class="rightnav" @close="close" @show="show"></right-nav>
      <div>
          <Footer></Footer>
      </div>
      <div class="contact" v-if="showPop">
          <Contact @close="close" @show="show"></Contact>
      </div>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
import rightNav from '../../components/rightNav'
import Contact from '../../components/contact'
export default {
    components: { Header, Footer, rightNav, Contact },
    data () {
        return {
            showPop: false
        }
    },
    created () {
    },
    methods: {
        show () {
            document.documentElement.scrollTop = 0
            this.showPop = true
        },
        close () {
            this.showPop = false
        }
    }
}
</script>

<style lang='scss' scoped>
.layout{
    width: 100%;
    height: 100%;
    position: relative;
    .contact{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
}
.rightnav{
        position: fixed;
        bottom: 140px;
        right: 1%;
        margin-left: 620px;
        z-index: 999;
    }
</style>
