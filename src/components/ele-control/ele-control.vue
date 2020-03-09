<template>
  <div class="control">
    <transition name="removeAdd">
      <i class="icon-remove_circle_outline" @click="removeCount" v-show="food.count"></i>
    </transition>
    <span v-show="food.count">{{food.count}}</span>
    <transition name="removeAdd">
      <i class="icon-add_circle" @click="addCount"></i>
    </transition>
  </div>
</template>

<script>
export default {
  name:'eleControl',
  props:{
    food:Object
  },
  methods:{
    removeCount(){
      this.bus.$emit("removeCount",this.food)
    },
    addCount(){
      this.bus.$emit("addCount",this.food)
    },
  }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/transition.styl'
  .control
    position absolute
    bottom 15px
    right 60px
    i
      display inline-block
      font-size 30px
      vertical-align middle
      color rgba(0,160,220,1)
    span
      display inline-block
      width 24px
      text-align center
      font-size 14px
      vertical-align middle
      color rgba(147,153,159,1)
</style>