<template>
  <div class="cart">
    <div class="carts" @click="showFoodList">
      <span class="inner icon-shopping_cart" :class="{active:totalCount >0}"></span>
      <i class="count" v-show="totalCount>0">{{totalCount}}</i>
    </div>
    <div class="money">¥{{totalPrice}}</div>
    <div class="serveMoney">另需配送费¥{{sellers.deliveryPrice}}元</div>
    <div class="pay" :class="{active:totalPrice>=sellers.minPrice}">
      <span>{{rightText}}</span>
    </div>
    <div class="balls">
      <transition 
        v-for="(ball, index) in balls" 
        :key="index"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <i class="ball" v-show="ball.show"></i>
      </transition>
    </div>
    <div class="cartList" v-show="flod">
      <div class="head">
        <span>购物车</span>
        <span @click="clear">清空</span>
      </div>
      <div class="foodListWrap" ref="foodListWrap">
        <ul class="foodList">
          <li v-for="selectedFood in selectedFoods">
            <span>{{selectedFood.name}}</span>
            <div class="right">
              <span class="two">¥{{selectedFood.price*selectedFood.count}}</span>
              <ele-control :food="selectedFood" class="food-control" :flod="flod"></ele-control>
            </div>
          </li>
        </ul>
      </div>  
    </div>
    <div class="mask" v-show="flod" @click="flod=false"></div>
  </div>
</template>

<script>
import {transform} from "../../util/transform.js"
import eleControl from "../ele-control/ele-control.vue"
import BScroll from "better-scroll"
export default {
  name:'eleCart',
  props:{
    selectedFoods:Array,
    sellers:Object
  },
  data(){
    return {
        balls:[
            {show:false},
            {show:false},
            {show:false},
            {show:false},
            {show:false}
        ],
        dropballs:[],
        flod:false
    }
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
  },
  methods:{
    // 清空购物车
    clear(){
      this.selectedFoods.forEach((selectedFood,index)=>{
        selectedFood.count = 0
      })
      this.flod = false
    },
    // 点击购物车展现列表
    showFoodList(){
      if(this.totalCount <=0){
        return; 
      }

    
    //让list产生滑屏
    this.$nextTick(()=>{
        if(!this.scroll){
            this.scroll = new BScroll(this.$refs.foodListWrap,{
                click:true
            })
        }else {
            this.scroll.refresh()
        }
    })
    return this.flod = !this.flod
      
    },
    // 加入购物车
    dropCarts(target){
      for(let i= 0; i<this.balls.length; i++){
        let ball = this.balls[i]
        if(!ball.show){
          ball.show = true
          ball.target = target
          this.dropballs.push(ball)
          return
        }
      }
    },
    beforeEnter(el){
      let count = this.balls.length
      while(count--){
        let ball = this.balls[count]
        if(ball.show){
          let viewH = document.documentElement.clientHeight
          let targetRect = ball.target.getBoundingClientRect()
          let X = targetRect.left - 28;
          let Y = viewH - targetRect.top - 45;

          transform(el,"translateX",X)
          transform(el,"translateY",-Y)

          break;
        }
      }     
    },
    enter (el) {
        let hook = el.offsetHeight;
        this.$nextTick(()=>{
            transform(el,"translateX",0)
            transform(el,"translateY",0)
        })
    },
    afterEnter(el){
      for(let i = 0;i<this.balls.length;i++){
        if(this.balls[i].show){
            this.balls[i].show = false
            el.style.display = "none"
          }
        }
      
      // let ball = this.dropballs.shift()
      // if(ball.show){
      //   ball.show = false
      //      el.style.display = "none"
      // }
    }  
  },
  mounted(){
    this.bus.$on("addCarts",(target)=>{
        this.dropCarts(target)
    })
  },
  components:{
    "ele-control":eleControl
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixin.styl"
.cart
  height 46px
  width 100%
  background #141d27
  display flex
  z-index 1
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
    left 38%
    bottom 0
    line-height 45px
    font-size 12px
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
  .balls
    .ball
      position absolute
      left 31px
      top 5px
      width 16px
      height 16px
      border-radius 50%
      background deeppink
      transition 0.2s transform linear
  .cartList
    position absolute
    left 0
    bottom 46px
    width 100%
    height 288px
    background-color #fff
    z-index -2
    .head
      width 100%
      height 40px
      padding 0 18px
      box-sizing border-box
      background-color #ccc
      display flex
      justify-content space-between
      align-items center
      span
        font-weight 700
        &:first-child
          font-size 16px
        &:last-child
          color #00a0dc
          font-size 15px
    .foodListWrap
      overflow hidden
      height 260px
      padding-bottom 20px
      .foodList
        padding-bottom 50px
        
      li
        one-bor(#666)
        height 48px
        width 100%
        display flex
        justify-content space-between
        align-items center
        padding 0 18px
        
        &:last-child
          border none
        .right
          display inline-block
          display flex
          justify-content space-around
          align-items center
          >span 
            width 30px
            margin-right 10px
            display inline-block
            text-align right
          .food-control
            position static
            margin-right 40px
  .mask
    position fixed
    z-index -3
    left 0
    right 0
    top 0
    bottom 0
    background rgba(7,17,27,.6)
    backdrop-filter blur(5px)

</style>