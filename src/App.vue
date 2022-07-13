<template>
  <div id="app-wrapper">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import EmptyLayout from '@/layouts/EmptyLayout'
export default {
  components: {
    MainLayout,
    EmptyLayout
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  }
}
</script>

<style lang="scss">
  #app-wrapper {
    width: 100%;
    min-height: 100vh;
  }
</style>
