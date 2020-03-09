<template>
    <div class="goods">
        <div class="goods-wrap" ref="goodsWrap">
            <ul class="goods-l" ref="leftList">
                <li 
                    v-for="(item, index) in goodsArr" 
                    :key="index" 
                    :class="{active:currentIndex ===index}"
                    @click="handleCForTypeItem(index)"
                >
                    <ele-icon :size="2" :type="item.type" v-if="item.type"></ele-icon>
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="goods-r" ref="goodsR">
            <ul class="goodsList" ref="goodsList">
                <li v-for="(item,index) in goodsArr" :key="index">
                    <h2>{{item.name}}</h2>
                    <ul class="foods">
                        <li v-for="(food, key) in item.foods" :key="key">
                            <ele-foods :food="food"></ele-foods>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!--购物车区域-->
        <ele-cart 
            class="cart" 
            :sellers="sellers"
            :selectedFoods="selectedFoods"
        ></ele-cart>
        
    </div>
</template>

<script>
import eleIcon from 'components/ele-icon/ele-icon.vue'
import eleFoods from 'components/ele-foods/ele-foods.vue'
import eleCart from 'components/ele-cart/ele-cart.vue'
import axios from '../../api/index'
import BScroll from 'better-scroll'
    let OK = 0
    export default {
        name: "ele-goods",
        props:{
            sellers:Object
        },
        data(){
            return {
                goodsArr:[],
                Tops:[],
                scrollY:0
            }
        },
        computed:{
            selectedFoods(){
                let selectedFoods = []
                this.goodsArr.forEach((good)=>{
                  good.foods.forEach((food)=>{
                    if(food.count > 0){
                        selectedFoods.push(food)
                    }
                  })
              })
              return selectedFoods;
            },
            currentIndex(){
                let {Tops,scrollY} = this
                let index = Tops.findIndex((top,index)=>{
                    return top <= scrollY && scrollY < Tops[index+1] 
                })
                /*左侧列表要尽可能的顶到头
                对于下一次index的改变 当前这个oldIndex 可以被认为是上一次的index*/
                if(this.oldIndex !== index){
                    this.oldIndex = index
                    let targetLi = this.$refs.leftList.children[index]
                    this.typeScroll && this.typeScroll.scrollToElement(targetLi,300)
                }

                return index
                

            }
        },
        methods:{
            // 点击改变右边列表
            handleCForTypeItem(index){
              const top = this.Tops[index];
              this.foodsScrool && this.foodsScrool.scrollTo(0,-top,300)                
            },
            // 初始化滑屏
            _initscrool(){
                // goods left scrool//让左侧列表产生滑屏
                this.typeScroll =new BScroll(this.$refs.goodsWrap,{
                     click:true
                })    
                //  goods right scrool
                this.foodsScrool = new BScroll(this.$refs.goodsR,{
                    click:true,
                    probeType:3
                })  
                this.foodsScrool.on("scroll",({x,y})=>{   
                    this.scrollY = Math.abs(y)
                })
            },
            // 初始化数组,将每个li距离顶部的距离加到数组中
            _initTops(){
                let listItems  = this.$refs.goodsList.children
                let top = 0
                let Tops = [top]
                Array.from(listItems).forEach((foodsItem)=>{
                    top +=  foodsItem.offsetHeight
                    Tops.push(top)
                })
                this.Tops = Tops
            },
            
        },
           /* 实现左右侧列表联动的功能:
        1. 定义一个数组存放右侧列表每一项的位置
            注意渲染问题; 需要使用$nextTick这个api
        2. 拿到右侧滑动时的实时位置
            注意better-scroll 默认是不派发scroll钩子的
            配置:probeType:3
        3. 判断一下实时位置 坐落于第一步拿到的数组哪个区间
            这个区间所对应的下标 就是我们滑到了哪一项上!!
        4. 左侧列表在被选中时;应该要尽可能的顶到头
            我们对滑屏的初始化是在nextTick中做的
            那在vue初始化渲染的时候;滑屏是没有被注册的;
            所以我们一定的判断一下 滑屏是否已经存在
        5. 点击左侧列表时;右侧列表得主动滑到对应位置上
            默认情况下 better-scroll是不会派发click事件的
            配置:click:true
   */
        async mounted(){
             const {errno,data:goods} = await this.axios.get("/api/goods")
             if(errno === OK){
                this.goodsArr = goods
             }
         
            this.$nextTick(function(){
                // 调用初始化Tops数组
                this._initTops()
                // 调用初始化滑屏
                this._initscrool()
            })

            // 定义总线 添加或者减少商品  count
            //增加
            this.bus.$on("addCount",(food)=>{
                if(food.count){
                    food.count ++
                }else{
                    this.$set(food,"count",1)
                }
            })
            // 减少
            this.bus.$on("removeCount",(food)=>{
                if(food.count){
                    food.count --
                }
            })

                        
        },
        components:{
            "ele-icon":eleIcon,
            "ele-foods":eleFoods,
            "ele-cart":eleCart
        }
    }
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl'
.goods
    display flex
    position absolute
    top 174px
    left 0
    right 0
    bottom 46px
    overflow hidden 
    .goods-wrap
        width 80px
        height 100%
        .goods-l
            width 100%
            li
                height 54px
                width 100%     
                display flex
                font-weight 700
                justify-content center
                align-items center  
                background-color #f3f5f7  
                &.active
                    background rgba(0,160,220,1) 
                    color #fff
                one-bor(rgba(7,17,27,0.1))
                &:after
                    right 0
                    margin 0 auto
                    width 56px
                span
                    font-size 12px
                    font-weight 200
    .goods-r
        width 100%
        .goodsList
            li
                width 100%
            h2
                height: 26px;
                background: #f3f5f7;
                border-left: 3px solid #d9dde1;
                font-size: 12px;
                line-height: 26px;
                color: #8f999f;
                width 100%
                padding-left 5px
            .foods
                color #93999f
    .cart
        flex 0 0 0
        position fixed
        left 0
        bottom 0
            



</style>