<template>
  <div
    class="mdc-menu-surface"
    @MDCMenuSurface:closed="onClosed"
    @MDCMenuSurface:opened="onOpened"
  >
    <slot />
  </div>
</template>

<script src="./script.js">

</script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>