  
<template>
  <label
    :class="classes"
    class="mdc-floating-label"
    v-bind="$attrs"
    @_init="onParentInit"
  >
    <slot />
  </label>
</template>

<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>