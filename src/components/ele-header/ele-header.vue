<template>
    <div class="header">
        <div class="header-top">
            <div class="avatar">
                <img :src="sellers.avatar" alt="">
            </div>
            <div class="info">
                <div class="brand">
                    <i class="brand-ico"></i>
                    <span class="name">{{sellers.name}}</span>
                </div>
                <p>{{sellers.description}}/{{sellers.deliveryTime}}分钟送达</p>
                <div class="support"  v-if="sellers.supports">
                    <ele-icon :size="1" :type="sellers.supports[0].type" ></ele-icon>
                    <span>{{sellers.supports[0].content}}</span>
                </div>
            </div>
            <div class="btn" @click="showMask=true"  v-if="sellers.supports">
                <span>{{sellers.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bg">
            <img :src="sellers.bgImg" alt="">
        </div>
        <div class="bulletin">
            <div class="left">
                <i class="icon"></i>
                <span class="text"  @click="showMask=true">
                    {{sellers.bulletin}}
                </span>
            </div>
            <i class="icon-keyboard_arrow_right right"></i>
        </div>
        <transition name="showMask">
            <div class="mask" v-show="showMask">
                <div class="mask-wrap">
                    <div class="mask-main">
                        <h3>{{sellers.name}}</h3>
                        <div class="starsWrap">
                            <ele-stars :size="24" :score="sellers.score"></ele-stars>
                        </div>
                        <ele-line>
                            <span>优惠信息</span>
                        </ele-line>
                        <ele-list :supports="sellers.supports"></ele-list>
                        <ele-line>
                            <span>商家公告</span>
                        </ele-line>
                        <span class="sj-show">
                            {{sellers.bulletin}}
                        </span>
                    </div>
                </div>
                <div class="mask_footer" @click="showMask=false">
                    <i class="icon-close close"></i>
                </div>
            </div>
        </transition>
    </div>

</template>

<script>
    import eleIcon from '../ele-icon/ele-icon.vue'
    import eleLine from '../ele-line/ele-line.vue'
    import eleList from '../ele-list/ele-list.vue'
    import eleStars from '../ele-stars/ele-stars.vue'
    export default {
        name: "ele-header",
        props:{
            sellers:Object
        },
        data(){
            return{
                showMask:false
            }
        },
        components:{
            "ele-icon":eleIcon,
            "ele-line":eleLine,
            "ele-list":eleList,
            "ele-stars":eleStars
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.styl"
    .header
        background rgba(7,17,27,.5)
        position relative
        overflow hidden
        .header-top
            padding 24px 0 18px 24px
            display inline-flex
            .avatar
                line-height 18px
                display inline-block
                img
                    width 64px
                    height 64px
                    border-radius 4px
            .info
                margin-left 16px
                .name 
                    font-size 16px
                    color rgb(255,255,255)
                    font-weight bold 
                p
                    font-size 12px
                    font-weight 200
                    color rgb(255,255,255)
                    line-height 12px
                .brand
                    margin-top 2px
                    margin-bottom 8px
                    .brand-ico
                        bg-img(brand)
                        width 30px
                        height 18px
                        display inline-block
                        background-size cover
                        vertical-align top
                        margin-right 6px
                        background-image url("brand@2x.png")
                    .name
                        vertical-align top

                .support
                    margin-top 10px
                    margin-bottom 2px
                    i 
                        vertical-align top
                    span 
                        font-size 10px
                        font-weight 200
                        color rgb(255,255,255)
                        line-height 12px
                        vertical-align top
            .btn
                width 48px
                height 24px
                background-color rgba(0,0,0,0.2)
                border-radius 10px
                position absolute
                bottom 70px
                right 3% 
                font-size 10px
                display inline-block
                color rgb(255,255,255)
                font-weight 200
                line-height 24px
                text-align center
                span 
                    margin-right 2px
        .bg
            position absolute
            left 0
            top 0
            right 0
            bottom 0
            margin auto
            filter blur(10px)
            z-index -1
            img 
                width 100%
                height 100%
        .bulletin
            width 100%
            height 28px
            line-height 28px
            color rgba(255,255,255,1)
            font-size 10px
            font-weight 200
            background rgba(7,17,17,.2)
            position relative
            .left
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                height 100%
                margin-right 26px
                .icon
                    bg-img(bulletin)
                    background-size 100%
                    background-repeat no-repeat
                    display inline-block
                    width 22px
                    height 12px
                    margin-left 12px
                    margin-right 4px
                    position relative
                    top 1px
            .right
                position absolute
                right 10px
                bottom 8px
        .mask
            z-index 9
            backdrop-filter blur(10px)
            position fixed
            left 0
            right  0
            top 0
            bottom  0
            background-color rgba(7,17,27,0.8)
            padding-top 64px
            .mask-main
                padding-bottom 96px
                width 80%
                margin 0 auto 
                min-height 100%
                h3 
                    font-size 16px
                    font-weight 700
                    color rgb(255,255,255)
                    line-height 16px
                    text-align center
                    margin-bottom 16px
                .starsWrap
                    text-align center
                    margin-top 16px
                    margin-bottom 28px
                .sj-show{
                    font-size 12px
                    font-weight 700
                    line-height 24px
                    color #ffffff
                }
            .mask_footer
                margin-top -96px
                padding 32px 0
                text-align center
                .close
                    font-size 32px
                    color rgba(255,255,255,1)
            

</style>

