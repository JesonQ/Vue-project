<template>
    <div class="line-wrap">
        <div class="line"></div>
        <slot>
            <span>xxx</span>
        </slot>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    name:'ele-line'
}
</script>

<style scoped>
    .line-wrap{
        display: flex;
        align-items: center; 
        margin: 0 auto;
    }
    .line{
       width: 35%;
       height: 1px; 
       margin: 28px 0 24px 0;
       line-height: 12px;
       background-color: rgba(255,255,255,0.2);
       
    }
    .line-wrap span{
        margin: 0 auto;
        display: block;
        color: #fff;
    }
            
        


</style>