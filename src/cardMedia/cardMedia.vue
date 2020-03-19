<template>
 <div
    :class="classes"
    class="mdc-card__media"
  >
    <div
      v-if="isNotEmptySlot('default')"
      class="mdc-card__media-content"
    >
      <slot />
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>