<template>
  <div class="cart">
    <div class="carts">
      <span class="inner icon-shopping_cart" :class="{active:totalCount >0}"></span>
      <i class="count" v-show="totalCount>0">{{totalCount}}</i>
    </div>
    <div class="money">¥{{totalPrice}}</div>
    <div class="serveMoney">另需配送费¥{{sellers.deliveryPrice}}元</div>
    <div class="pay" :class="{active:totalPrice>=sellers.minPrice}">
      <span>{{rightText}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'eleCart',
  props:{
    selectedFoods:Array,
    sellers:Object
  },
  computed: {
    totalCount(){
        let totalCount =0 ;
        this.selectedFoods.forEach((selectedFood)=>{
            totalCount +=  selectedFood.count
        })
        return totalCount;
    },
    totalPrice(){
      let totalPrice = 0
      this.selectedFoods.forEach((selectedFood)=>{
        totalPrice += selectedFood.price * selectedFood.count
      })
      return totalPrice
    },
    rightText(){
      if(this.totalPrice === 0){
          return `¥${this.sellers.minPrice}起送`
      }else if(this.totalPrice < this.sellers.minPrice){
          return `还差¥${this.sellers.minPrice - this.totalPrice}起送`
      }else {
          return "去结算"
      }
    }
  }
}
</script>

<style lang="stylus">
.cart
  height 46px
  width 100%
  background #141d27
  display flex
  .carts
    width 50px
    height 50px
    background #141d27
    margin-bottom 6px
    border-radius 50%
    position absolute
    left 22px
    bottom 6px
    display flex
    justify-content center
    align-items center
    .inner
      width 44px
      height 44px
      background rgba(255,255,255,.2)
      border-radius 50%
      &.active
        background rgba(0,160,220,1)
    .count
      position absolute
      right -10px
      top -5px
      width 24px
      height 20px
      line-height 16px
      border-radius 6px
      background rgb(216, 12, 24)
      font-size 9px
      font-weight 700
      text-align center
      color #fff
      opacity 1
      transition opacity 0.2s linear
    .icon-shopping_cart
      line-height 44px
      text-align center
      font-size 24px
      color rgba(255,255,255,.4)
  .money
    font-size 24px
    color rgba(255,255,255,.4)
    position absolute
    left 22%
    bottom 0
    line-height 45px
  .serveMoney
    position absolute
    left 35%
    bottom 0
    line-height 45px
    font-size 16px
    color rgba(255,255,255,.4)
  .pay
    width 105px
    height 100%
    background-color rgba(255,255,255,.4)
    text-align center
    line-height 45px
    position absolute
    right 0px
    bottom 0px
    &.active
      background-color green
      color #fff

</style>