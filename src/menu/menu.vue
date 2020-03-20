<template>
 <div
    class="mdc-menu mdc-menu-surface"
    @MDCMenu:selected="onSelect"
    @_init="onParentInit"
  >
    <slot />
  </div>
</template>

<script src="./script.js">

</script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>