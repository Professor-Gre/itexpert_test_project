<template>
  <div class="loader">
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        class="back"
        cx="60"
        cy="60"
        r="58.5"
      />
      <path
        class="front"
        d="M60,1.5c33.2,0,58.5,26.8,58.5,58.5c0,32.3-26.2,58.5-58.5,58.5S1.5,92.3,1.5,60S27.7,1.5,60,1.5"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
  .loader {
    width: 120px;
    height: 120px;
    & .back {
      stroke: #F5F2F2;
      stroke-width: 3px;
    }
    & .front {
      stroke: #89AFFA;
      stroke-width: 3px;
      stroke-linecap: round;
      stroke-dasharray: 0, 368;
      stroke-dashoffset: 0;
      animation: loader 3s infinite;
    }
    @keyframes loader {
      0% {
        stroke-dasharray: 0, 368;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 368, 368;
        stroke-dashoffset: 0;
      }
      100% {
        stroke-dasharray: 0, 368;
        stroke-dashoffset: -368;
      }
    }
  }
</style>
