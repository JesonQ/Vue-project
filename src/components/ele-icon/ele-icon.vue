<template>
        <i class="icon" :class="[`icon-${size}`,`${typesArr[type-1]}`]"></i>
</template>

<script>
export default {
    name:'ele-icon',
    props:{
        size:Number,
        type:Number,
    },
    data(){
        return {
            typesArr:["decrease","discount","guarantee","invoice","special"]
        }
    }

}
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.styl"
.icon
    vertical-align top
    background-size 100%
    background-repeat no-repeat
    display inline-block
    margin-right 4px
    &.icon-1
        width 12px
        height 12px
        &.decrease
            bg-img(decrease_1)
        &.discount
            bg-img(discount_1)
        &.guarantee
            bg-img(guarantee_1)
        &.invoice
            bg-img(invoice_1)
        &.special
            bg-img(special_1)
    &.icon-2
        width 16px
        height 16px
        &.decrease
            bg-img(decrease_2)
        &.discount
            bg-img(discount_2)
        &.guarantee
            bg-img(guarantee_2)
        &.invoice
            bg-img(invoice_2)
        &.special
            bg-img(special_2)
    &.icon-3
        width 12px
        height 12px
        &.decrease
            bg-img(decrease_3)
        &.discount
            bg-img(discount_3)
        &.guarantee
            bg-img(guarantee_3)
        &.invoice
            bg-img(invoice_3)
        &.special
            bg-img(special_3)
    &.icon-4
        width 16px
        height 16px
        &.decrease
            bg-img(decrease_4)
        &.discount
            bg-img(discount_4)
        &.guarantee
            bg-img(guarantee_4)
        &.invoice
            bg-img(invoice_4)
        &.special
            bg-img(special_4)

</style>