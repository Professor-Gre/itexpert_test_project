<template>
  <div class="login__status-inner">
    <div class="login__status-icon">
      <icon-cross color="#89AFFA" />
    </div>
    <span class="login__status-title">
      Ошибка авторизации
    </span>
    <span class="login__status-text">
      Пользователь с такими учетными данными не найден
    </span>
    <div
      class="login__status-button"
      @click="tryAgain"
    >
      <base-button
        text="Попробовать еще раз"
      />
    </div>
  </div>
</template>

<script>
import IconCross from '@/components/icons/IconCross'
import BaseButton from '@/components/ui/BaseButton'
export default {
  components: {
    IconCross,
    BaseButton
  },
  methods: {
    tryAgain () {
      this.$emit('tryAgain', 'login')
    }
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
      &-text {
        color: #242424;
        font-size: 16px;
        font-weight: 400;
        margin-top: 15px;
        @media screen and (max-width: 680px) {
          font-size: 14px;
          text-align: center;
        }
      }
      &-button {
        margin-top: 50px;
        @media screen and (max-width: 680px) {
          margin-top: 30px;
        }
      }
    }
  }
</style>
