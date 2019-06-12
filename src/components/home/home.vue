<template>
    <div class="view-home">
        <router-view class="showBox"></router-view>
    </div>
</template>
<script>
export default {
    name: 'home'
}
</script>

<style lang="scss" scoped>
.showBox{
    margin-bottom: 51px;
}
.view-home{
    height: 100%;
}
</style>

