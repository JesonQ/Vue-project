<template>
  <div id="app">
    <ele-header :sellers="sellers"></ele-header>
    <div class="navs">
      <div class="item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="item">
        <router-link to="/sellers">商家</router-link>
      </div>
    </div>
    <router-view :sellers='sellers'></router-view>
  </div>
</template>

<script>
  import header from "components/ele-header/ele-header.vue";
  let OK = 0
  export default {
    name: 'App',
    data(){
      return {
        sellers:{}
      }
    },
    components:{
        "ele-header":header
    },
    async mounted(){
        const body = await this.axios.get('/api/sellers')
        if(body.errno === OK){
          this.sellers = body.data
        }
    }
  }
</script>

<style scoped lang="stylus">
  @import './common/stylus/mixin.styl'

  .navs
    one-bor(rgba(7,17,27,.1))
    width 100%
    height 40px
    line-height 40px
    display flex
    background-color #fff
    .item
      flex 1
      text-align center
      a
        display inline-block
        width 100%
        height 100%
        font-size 14px
        color rgb(77,85,93)
        &.active
          color rgb(240,20,20)

</style>
