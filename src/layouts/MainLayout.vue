<template>
  <div class="main-layout">
    <the-header />
    <div class="content-block">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="scss" scoped>
  .main-layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #ffffff;
  }
  .content-block {
    width: 100%;
    min-height: 100vh;
  }
</style>
