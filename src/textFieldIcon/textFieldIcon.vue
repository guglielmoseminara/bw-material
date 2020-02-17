  
  
<template>
  <i
    class="mdc-text-field__icon"
    :class="classes"
    v-bind="attrs"
    v-on="$listeners"
    @_init="onParentInit"
  >
    <slot>{{ icon }}</slot>
  </i>
</template>
<script src="./script.js"></script>


<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>