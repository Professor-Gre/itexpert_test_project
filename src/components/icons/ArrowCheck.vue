<template>
  <svg
    :style="cssProps"
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill=""
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.72656 9.625L5.25 11.1562L9.67969 15.75L17.0625 8.09375L15.5859 6.5625L9.67969 12.6875L6.72656 9.625Z" fill="inherit"/>
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
