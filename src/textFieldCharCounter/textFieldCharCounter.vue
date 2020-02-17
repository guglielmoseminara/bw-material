  
<template>
  <div
    class="mdc-text-field-character-counter"
    @_init="onParentInit"
  >
    {{ currentLength }} / {{ maxLength }}
  </div>
</template>
<script src="./script.js"></script>


<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>