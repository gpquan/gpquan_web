<template>
  <div>
    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-more="more"
      :rightShow="false"
    >项目介绍</nut-navbar>
  </div>
</template>

<script>
export default {
    methods: {
        back(){
            alert('header头部， 点击返回')
            this.$router.back()
        },
        title(){
            alert('header头部， 点击title')
        },
        more(){
            alert('header头部， 点击更多')
        }
    }
};
</script>

<style lang="scss" scoped>
</style>