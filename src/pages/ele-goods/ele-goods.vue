<template>
    <div class="goods">
        <div class="goods-wrap" ref="goodsWrap">
            <ul class="goods-l">
                <li v-for="(item, index) in goodsArr" :key="index" :class="{active:currentIndex ===index}">
                    <ele-icon :size="2" :type="item.type" v-if="item.type"></ele-icon>
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="goods-r" ref="goodsR">
            <ul class="goodsList">
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
    </div>
</template>

<script>
import eleIcon from 'components/ele-icon/ele-icon.vue'
import eleFoods from 'components/ele-foods/ele-foods.vue'
import axios from '../../api/index'
import BScroll from 'better-scroll'
    let OK = 0
    export default {
        name: "ele-goods",
        data(){
            return {
                goodsArr:[],
                currentIndex:0
            }
        },
        async mounted(){
             const {errno,data:goods} = await this.axios.get("/api/goods")
             if(errno === OK){
                this.goodsArr = goods
             }

             // goods left scrool
             new BScroll(this.$refs.goodsWrap)    
            //  foods right scrool
             new BScroll(this.$refs.goodsR)      
        },
        components:{
            "ele-icon":eleIcon,
            "ele-foods":eleFoods
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
                justify-content center
                align-items center  
                background-color #f3f5f7  
                &.active
                    background skyblue 
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
            



</style>