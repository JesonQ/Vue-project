<template>
    <div class="header">
        <div class="header-top">
            <div class="avatar">
                <img src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" alt="">
            </div>
            <div class="info">
                <div class="brand">
                    <i class="brand-ico"></i>
                    <span class="name">嘉禾一品（温都水城）</span>
                </div>
                <p>蜂鸟专送/36分钟送达</p>
                <div class="support">
                    <ele-icon :size="1" :type="1"></ele-icon>
                    <span>满减即送精美礼品一份!</span>
                </div>
            </div>

            <div class="btn">
                <span>5个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bg">
            <img src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" alt="">
        </div>
        <div class="bulletin">
            <div class="left">
                <i class="icon"></i>
                <span class="text">
                    是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”
                </span>
            </div>
            <i class="icon-keyboard_arrow_right right"></i>
        </div>
        <div class="mask">
            <div class="mask-wrap">
                <div class="mask-main">
                    <h3>粥品天下(大水店)</h3>
                    <div class="star"></div>
                    <ele-line>
                        <span>优惠信息</span>
                    </ele-line>
                    <ele-list></ele-list>
                    <ele-line>
                        <span>商家公告</span>
                    </ele-line>
                    <span class="sj-show">
                        用2B形容你，人家铅笔不乐意。
                        都说谈恋爱会影响学习，难道学习，就不影响谈恋爱吗？
                        别人都用名牌包包，而你，只能用用表情包。
                        夜太美，尽管再危险，总有人黑着眼眶修着仙。
                    </span>
                </div>
            </div>
            <div class="mask_footer">
                <i class="icon-close close"></i>
            </div>
        </div>
    </div>

</template>

<script>
    import eleIcon from '../ele-icon/ele-icon.vue'
    import eleLine from '../ele-line/ele-line.vue'
    import eleList from '../ele-list/ele-list.vue'
    export default {
        name: "ele-header",
        components:{
            "ele-icon":eleIcon,
            "ele-line":eleLine,
            "ele-list":eleList
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.styl"
    .header
        background rgba(7,17,27,.5)
        position relative
        .header-top
            background-color rgba(7,17,27,0.5)  
            padding 24px 0 18px 24px
            display flex
            .avatar
                line-height 18px
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
                bottom 40px
                right 12px 
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
            background rgba(7,17,17,.6)
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
            min-height 100%         
            z-index 9
            backdrop-filter blur(10px)
            position fixed
            left 0
            right  0
            top 0
            bottom  0
            background-color rgba(7,17,27,0.8)
            padding 64px 36px 32px 36px
            .mask-wrap
                min-height 100%
            .mask-main
                padding-bottom 96p
                h3 
                    font-size 16px
                    font-weight 700
                    color rgb(255,255,255)
                    line-height 16px
                    text-align center
                    margin-bottom 16px
                .star
                    height 24px
                    background-color pink
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

