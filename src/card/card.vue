<template>
  <div
    :class="classes"
    class="mdc-card"
  >
    <div
      v-if="primaryAction"
      class="mdc-card__primary-action"
      tabindex="0"
      v-on="$listeners"
    >
      <slot />
    </div>
    <slot v-else :class="{'horizontal-container' : type==='horizontal'}" />
    <div
      v-if="$slots['actionButtons'] || $slots['actionIcons'] || $slots['fullBleedButton'] || $slots['actions']"
      :class="actionClasses"
      class="mdc-card__actions"
    >
      <slot
        v-if="fullBleedAction && $slots['fullBleedButton']"
        name="fullBleedButton"
      />
      <slot
        name="actions"
      />
      <div
        v-if="!fullBleedAction && $slots['actionButtons']"
        class="mdc-card__action-buttons"
      >
        <slot name="actionButtons" />
      </div>
      <div
        v-if="!fullBleedAction && $slots['actionIcons']"
        class="mdc-card__action-icons"
      >
        <slot name="actionIcons" />
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>