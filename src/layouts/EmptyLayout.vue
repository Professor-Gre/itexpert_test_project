<template>
  <div class="empty-layout">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
  .empty-layout {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
</style>
