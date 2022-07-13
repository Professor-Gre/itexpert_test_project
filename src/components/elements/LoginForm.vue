<template>
  <form action="" class="login__form">
    <div class="login__form-group">
      <div class="login__form-group-top">
        <label for="" class="login__form-label">
          Электронная почта:
        </label>
        <div class="login__form-icon">
          <arrow-check
            color="#89AFFA"
            v-show="login.valid"
          />
          <icon-cross
            color="#242424"
            v-show="!login.valid && login.touched"
          />
        </div>
      </div>
      <input
        type="email"
        placeholder=""
        :class="{
          'login__form-input': true,
          'valid': login.valid
        }"
        ref="inputLogin"
        @input="inputLoginHandler"
        @change="inputLoginHandler"
      >
    </div>
    <div class="login__form-group">
      <div class="login__form-group-top">
        <label for="" class="login__form-label">
          Пароль:
        </label>
        <div class="login__form-icon">
          <arrow-check
            color="#89AFFA"
            v-show="pass.valid"
          />
          <icon-cross
            color="#242424"
            v-show="!pass.valid && pass.touched"
          />
        </div>
      </div>
      <input
        type="password"
        placeholder=""
        ref="inputPass"
        :class="{
          'login__form-input': true,
          'valid': pass.valid
        }"
        @input="inputPassHandler"
        @change="inputPassHandler"
      >
    </div>
    <div
      class="login__form-button"
      @click="buttonClickHandler"
    >
      <base-button
        text="Войти"
        :class="{
          'disabled': button.disabled
        }"
        @click="buttonClickHandler"
      />
    </div>
  </form>
</template>

<script>
import ArrowCheck from '@/components/icons/ArrowCheck'
import IconCross from '@/components/icons/IconCross'
import BaseButton from '@/components/ui/BaseButton'
export default {
  components: {
    ArrowCheck,
    IconCross,
    BaseButton
  },
  data () {
    return {
      login: {
        valid: false,
        value: '',
        touched: false,
        /* eslint-disable */
        mask: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        /* eslint-enable */
      },
      pass: {
        valid: false,
        value: '',
        touched: false
      },
      button: {
        disabled: true
      },
      validLogin: 'example@email.zone',
      validPass: 'password'
    }
  },
  methods: {
    inputLoginHandler (event) {
      if (!this.login.touched) {
        this.login.touched = true
      }
      if (this.login.mask.test(event.target.value)) {
        this.login.valid = true
      } else {
        this.login.valid = false
      }
      this.buttonDisabledHandler()
    },
    inputPassHandler (event) {
      if (!this.pass.touched) {
        this.pass.touched = true
      }
      if (event.target.value.length < 8) {
        this.pass.valid = false
      } else {
        this.pass.valid = true
      }
      this.buttonDisabledHandler()
    },
    buttonDisabledHandler () {
      if (this.login.valid && this.pass.valid) {
        this.button.disabled = false
      } else {
        this.button.disabled = true
      }
    },
    buttonClickHandler (e) {
      e.preventDefault()
      if (this.login.valid && this.pass.valid && !this.button.disabled) {
        this.$emit('formFetched', 'fetch')
        if (this.$refs.inputLogin.value === this.validLogin && this.$refs.inputPass.value === this.validPass) {
          this.$emit('formFetched', 'ok')
          localStorage.setItem('token', 'fakeToken')
          setTimeout(() => {
            this.$router.push({ path: '/' })
          }, 2500)
        } else {
          this.$emit('formFetched', 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    &__form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 35px;
      @media screen and (max-width: 680px) {
        gap: 25px;
      }
      &-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        &-top {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      &-label {
        color: #242424;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.2;
        @media screen and (max-width: 680px) {
          font-size: 16px;
        }
      }
      &-icon {
        width: 21px;
        height: 21px;
      }
      &-input {
        width: 100%;
        height: 56px;
        background-color: transparent;
        border: 2px solid #D1D1D1;
        outline: none;
        color: #242424;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1;
        border-radius: 4px;
        margin-top: 8px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 3px;
        transition: border 0.3s;
        &:focus {
          border: 2px solid #89AFFA;
        }
        &.valid {
          border: 2px solid #89AFFA;
        }
        @media screen and (max-width: 680px) {
          height: 46px;
        }
      }
      &-button {
        margin-top: auto;
        @media screen and (max-width: 680px) {
          width: 100%;
        }
      }
    }
  }
</style>
