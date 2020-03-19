<template>
 <div
    :class="classes"
    class="mdc-text-field"
  >
    <slot name="leadingIcon" />
    <slot
      v-if="textarea"
      name="characterCounter"
    />
    <input
      autocomplete="new-password"
      :type="inputType"
      v-if="!textarea"
      :value="value"
      class="mdc-text-field__input"
      v-bind="$attrs"
      @input="$emit('model', $event.target.value)"
      v-on="$listeners"
    >
    <textarea
      v-if="textarea"
      :value="value"
      class="mdc-text-field__input"
      v-bind="$attrs"
      @input="$emit('model', $event.target.value)"
      v-on="$listeners"
    />
    <div
      v-if="textarea || outlined"
      class="mdc-notched-outline"
    >
      <div class="mdc-notched-outline__leading" />
      <div
        v-if="isNotEmptySlot('default')"
        class="mdc-notched-outline__notch"
      >
        <slot />
      </div>
      <div class="mdc-notched-outline__trailing" />
    </div>
    <slot v-if="isNotEmptySlot('default') && !textarea && !outlined" />
    <slot name="trailingIcon" />
    <slot
      v-if="!outlined"
      name="bottomLine"
    />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>
