<template>
  <div class="header">
    <section>
      <div class="header__nav">
        <router-link
          class="header__nav-item"
          to="/"
        >
          Главная
        </router-link>
        <router-link
          class="header__nav-item"
          to="/graph"
        >
          График
        </router-link>
      </div>
      <div class="header__right">
        <span class="header__email">
          {{ getEmailAddres }}
        </span>
        <span @click="handleExit" class="header__exit">
          Выйти
        </span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {
          text: 'Создание',
          link: '/making'
        }
      ]
    }
  },
  methods: {
    handleExit () {
      localStorage.removeItem('token')
      this.$router.push({ path: '/login' })
    }
  },
  computed: {
    getEmailAddres () {
      return 'example@email.zone'
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F5F2F2;
    border-bottom: 2px solid #89AFFA;
    z-index: 20;
    section {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    &__nav {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 30px;
      &-item {
        font-size: 18px;
        color: #242424;
        &.router-link-active {
          color: #89AFFA
        }
        @media screen and (max-width: 1300px) {
          font-size: 16px;
        }
        @media screen and (max-width: 680px) {
          font-size: 14px;
        }
      }
    }
    &__right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      gap: 12px;
      margin-left: auto;
    }
    &__email {
      color: #242424;
      font-size: 16px;
      font-weight: 400;
      line-height: 1;
      @media screen and (max-width: 680px) {
        font-size: 14px;
      }
    }
    &__exit {
      color: #89AFFA;
      font-size: 16px;
      font-weight: 400;
      line-height: 1;
      cursor: pointer;
      @media screen and (max-width: 680px) {
        font-size: 14px;
      }
    }
  }
</style>
