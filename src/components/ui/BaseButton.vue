<template>
  <button class="button">
    <span class="button__text">
      {{ text }}
    </span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Кнопка'
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    min-width: 240px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    background-color: #F5F2F2;
    border: 2px solid #89AFFA;
    border-radius: 4px;
    transition: background-color 0.3s, border 0.3s;
    @media screen and (max-width: 680px) {
      width: 100%;
      height: 46px;
    }
    &__text {
      color: #242424;
      font-size: 18px;
      font-weight: 400;
      line-height: 1;
      transition: color 0.3s;
      @media screen and (max-width: 1300px) {
        font-size: 16px;
      }
    }
    &.disabled {
      cursor: not-allowed;
      border: 2px solid #D1D1D1;
      .button__text {
        color: #C2C2C2;
      }
    }
    @media screen and (min-width: 1301px) {
      &:not(.disabled):hover {
        cursor: pointer;
        background-color: #89AFFA;
      }
    }
  }
</style>
