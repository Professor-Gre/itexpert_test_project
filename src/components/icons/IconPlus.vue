<template>
  <svg width="24" height="24" viewBox="0 0 24 24" :fill="fill" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3684 11.3684V6.3158H12.6316V11.3684H17.6842V12.6316H12.6316V17.6842H11.3684V12.6316H6.3158V11.3684H11.3684Z" fill="inherit"/>
  </svg>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: '#775DC1'
    }
  }
}
</script>

<style lang="scss" scoped>
  svg {
    transition: fill 0.3s;
  }
</style>
