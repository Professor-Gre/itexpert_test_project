<template>
  <div class="login">
    <div
      v-if="status === 'login' || status === 'fetch'"
      class="login__wrapper"
    >
      <div
        v-show="status === 'login'"
        class="login__body"
      >
        <login-form
          @formFetched="loginStatusHandler"
        />
      </div>
    </div>
    <div
      v-else-if="status === 'ok'"
      class="login__status"
    >
      <login-status-ok />
    </div>
    <div
      v-else-if="status === 'error'"
      class="login__status"
    >
      <login-status-error
        @tryAgain="loginStatusHandler"
      />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/elements/LoginForm'
import LoginStatusOk from '@/components/elements/LoginStatusOk'
import LoginStatusError from '@/components/elements/LoginStatusError'
export default {
  components: {
    LoginForm,
    LoginStatusOk,
    LoginStatusError
  },
  data () {
    return {
      status: 'login'
    }
  },
  methods: {
    loginStatusHandler (data) {
      setTimeout(() => {
        this.status = data
      }, 500)
      if (data === 'ok') {
        //
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    width: 550px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #F5F2F2;
    border: 2px solid #89AFFA;
    border-radius: 8px;
    @media screen and (max-width: 680px) {
      width: 300px;
      height: 310px;
    }
    &__wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    &__body {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 40px;
      padding-left: 60px;
      padding-right: 60px;
      padding-bottom: 40px;
      @media screen and (max-width: 680px) {
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
      }
    }
    &__status {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
