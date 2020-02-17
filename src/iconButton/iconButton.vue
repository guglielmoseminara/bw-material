<template>
<a
    v-if="href !== ''"
    :href="href"
    v-bind="$attrs"
    class="mdc-icon-button"
    :class="classes"
    v-on="$listeners"
    @MDCIconButtonToggle:change="$emit('change', $event.detail.isOn)"
  >
    <template v-if="icon && icon !== ''">
      {{ icon }}
    </template>
    <slot v-else />
    <slot
      v-if="isToggleButton"
      name="toggleOn"
    />
    <slot
      v-if="isToggleButton"
      name="toggleOff"
    />
  </a>
  <button
    v-else
    v-bind="$attrs"
    class="mdc-icon-button"
    :class="classes"
    v-on="$listeners"
    @MDCIconButtonToggle:change="$emit('change', $event.detail.isOn)"
  >
    <template v-if="icon && icon !== ''">
      {{ icon }}
    </template>
    <slot v-else />
    <slot
      v-if="isToggleButton"
      name="toggleOn"
    />
    <slot
      v-if="isToggleButton"
      name="toggleOff"
    />
  </button>
</template>

<script src="./script.js"></script>


<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>