<template>
  <div
    :class="classes"
    class="mdc-chip"
    tabindex="0"
    @MDCChip:interaction="$emit('clicked', !value)"
    @MDCChip:removal="$emit('remove') && $emit('change', false)"
    @MDCChip:trailingIconInteraction="onTrailingIconInteraction"
  >
    <div class="mdc-chip__ripple" ref="chipRipple"></div>
    <slot
      v-if="isNotEmptySlot('leadingIcon')"
      name="leadingIcon"
    />
    <div
      v-if="isFilter"
      class="mdc-chip__checkmark"
    >
      <svg
        class="mdc-chip__checkmark-svg"
        viewBox="-2 -3 30 30"
      >
        <path
          class="mdc-chip__checkmark-path"
          fill="none"
          stroke="black"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        />
      </svg>
    </div>
    <div class="mdc-chip__text">
      <slot />
    </div>
    <slot
      v-if="isNotEmptySlot('trailingIcon')"
      name="trailingIcon"
    />
  </div>
</template>


<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>