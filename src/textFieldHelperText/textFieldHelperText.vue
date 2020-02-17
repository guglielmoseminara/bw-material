  
  
<template>
<div
    class="mdc-text-field-helper-line"
  >
    <div
      class="mdc-text-field-helper-text"
      v-bind="$attrs"
      @_init="onParentInit"
    >
      <slot />
    </div>
  </div>
</template>

<script src="./script.js"></script>


<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>