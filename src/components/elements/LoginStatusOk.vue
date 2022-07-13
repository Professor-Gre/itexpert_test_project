<template>
  <div class="login__status-inner">
    <div class="login__status-icon">
      <arrow-check color="#89AFFA" />
    </div>
    <span class="login__status-title">
      Вы успешно авторизовались
    </span>
  </div>
</template>

<script>
import ArrowCheck from '@/components/icons/ArrowCheck'
export default {
  components: {
    ArrowCheck
  }
}
</script>

<style lang="scss" scoped>
  .login {
    &__status {
      &-inner {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 40px;
      }
      &-icon {
        width: 180px;
        height: 180px;
        @media screen and (max-width: 680px) {
          width: 120px;
          height: 120px;
        }
        & ::v-deep(svg) {
          width: 100%;
          height: 100%;
        }
      }
      &-title {
        color: #242424;
        font-size: 16px;
        font-weight: 400;
        margin-top: 5px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
        }
      }
    }
  }
</style>
