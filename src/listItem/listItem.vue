<template>
  <a
    v-if="href"
    :aria-selected="activated"
    :class="classes"
    :href="href"
    class="mdc-list-item"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span class="mdc-list-item__graphic" v-if="isNotEmptySlot('graphic')">
      <slot name="graphic" />
    </span>
    <slot />
    <span
      v-if="isNotEmptySlot('text') || isNotEmptySlot('primaryText') || isNotEmptySlot('secondaryText')"
      class="mdc-list-item__text"
    >
      <slot name="text" />
      <span
        v-if="isNotEmptySlot('primaryText')"
        class="mdc-list-item__primary-text"
      >
        <slot name="primaryText" />
      </span>
      <span
        v-if="isNotEmptySlot('secondaryText')"
        class="mdc-list-item__secondary-text"
      >
        <slot name="secondaryText" />
      </span>
    </span>
    <slot
      v-if="isNotEmptySlot('meta')"
      name="meta"
    />
  </a>
  <li
    v-else
    :class="classes"
    class="mdc-list-item"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span class="mdc-list-item__graphic" v-if="isNotEmptySlot('graphic')">
      <slot name="graphic" />
    </span>
    <slot />
    <span
      v-if="isNotEmptySlot('text') || isNotEmptySlot('primaryText') || isNotEmptySlot('secondaryText')"
      class="mdc-list-item__text"
    >
      <slot name="text" />
      <span
        v-if="isNotEmptySlot('primaryText')"
        class="mdc-list-item__primary-text"
      >
        <slot name="primaryText" />
      </span>
      <span
        v-if="isNotEmptySlot('secondaryText')"
        class="mdc-list-item__secondary-text"
      >
        <slot name="secondaryText" />
      </span>
    </span>
    <span class="mdc-list-item__meta" v-if="isNotEmptySlot('meta')">
      <slot name="meta" />
    </span>
  </li>
</template>

<script src="./script.js">

</script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>