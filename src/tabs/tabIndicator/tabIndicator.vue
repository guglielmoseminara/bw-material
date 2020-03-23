<template>
 <span
    :class="classes"
    class="mdc-tab-indicator"
  >
    <span
      :class="contentClasses"
      class="mdc-tab-indicator__content"
    >{{ icon }}</span>
  </span>
</template>

<script src="./script.js"></script>


<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>