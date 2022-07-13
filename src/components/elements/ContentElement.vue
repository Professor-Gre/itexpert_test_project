<template>
  <div class="content-element">
    <div class="content-element__user">
      <span class="content-element__text">
        Пользователь:
      </span>
      <span class="content-element__text">
        {{ userId }}
      </span>
    </div>
    <div class="content-element__completed">
      <span class="content-element__text">
        Успешно / не успешно:
      </span>
      <span class="content-element__text">
        <span class="content-element__text-completed">
          {{ completed }}
        </span> / <span class="content-element__text-uncompleted">
          {{ uncompleted }}
        </span>
      </span>
    </div>
    <div class="content-element__titles">
      <span
        v-for="title in titlesSlice"
        :key="title.id"
        class="content-element__text-small"
      >
        {{ title.title }}
      </span>
      <span class="content-element__text-small">
        ...
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userId: {
      type: Number,
      default: 0
    },
    completed: {
      type: Number,
      default: 0
    },
    uncompleted: {
      type: Number,
      default: 0
    },
    titles: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    titlesSlice () {
      return this.titles.slice(0, 5)
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-element {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #F5F2F2;
    border: 2px solid #89AFFA;
    border-radius: 8px;
    &__text {
      color: #242424;
      font-size: 18px;
      font-weight: 400;
      line-height: 1;
      @media screen and (max-width: 1300px) {
        font-size: 16px;
      }
      &-small {
        font-size: 16px;
        font-weight: 300;
        @media screen and (max-width: 1300px) {
          font-size: 14px;
        }
      }
      &-completed {
        color: #89AFFA;
      }
      &-uncompleted {
        color: #FA8989;
      }
    }
    &__user {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 14px;
      padding-bottom: 14px;
      border-bottom: 2px solid #89AFFA;
    }
    &__completed {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 14px;
      padding-bottom: 14px;
      border-bottom: 2px solid #89AFFA;
    }
    &__titles {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 14px;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 14px;
      padding-bottom: 20px;
    }
  }
</style>
