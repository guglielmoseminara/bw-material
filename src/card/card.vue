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
      v-if="isNotEmptySlot('actionButtons') || isNotEmptySlot('actionIcons') || isNotEmptySlot('fullBleedButton') || isNotEmptySlot('actions')"
      :class="actionClasses"
      class="mdc-card__actions"
    >
      <slot
        v-if="fullBleedAction && isNotEmptySlot('fullBleedButton')"
        name="fullBleedButton"
      />
      <slot
        name="actions"
      />
      <div
        v-if="!fullBleedAction && isNotEmptySlot('actionButtons')"
        class="mdc-card__action-buttons"
      >
        <slot name="actionButtons" />
      </div>
      <div
        v-if="!fullBleedAction && isNotEmptySlot('actionIcons')"
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