<template>
  <svg
    :style="cssProps"
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill=""
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.5625 5.25L5.25 6.5625L9.1875 10.5L5.25 14.4375L6.5625 15.75L10.5 11.8125L14.4375 15.75L15.75 14.4375L11.8125 10.5L15.75 6.5625L14.4375 5.25L10.5 9.1875L6.5625 5.25Z" fill="inherit"/>
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#242424'
    }
  },
  computed: {
    cssProps () {
      return {
        '--fill-color': this.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  svg {
    fill: var(--fill-color);
    transition: fill 0.3s;
  }
</style>
