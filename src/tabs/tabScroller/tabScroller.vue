<template>
  <div
    class="mdc-tab-scroller"
    :class="classes"
  >
    <div class="mdc-tab-scroller__scroll-area">
      <div class="mdc-tab-scroller__scroll-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>


<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>