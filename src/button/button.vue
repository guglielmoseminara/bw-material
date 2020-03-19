<template>
  <button @click.prevent="emitClick"
    v-bind="$attrs"
    :class="classes" ref="bwButton" :disabled="disabled"
  >
    <div :class="[subtype==='default' ? 'mdc-button__ripple' : 'mdc-fab__ripple']"></div>
    <span v-if="icon && subtype=='default' && icon.position === 'l'"
      class="material-icons mdc-button__icon" 
      aria-hidden="true"
    >
      {{icon.name}}
    </span>
    
    <span v-if="label && !isNotEmptySlot($slots['default'])"
      class="mdc-button__label"
    >{{ label }}</span>
    <slot v-else />

    <span v-if="icon && subtype=='default' && icon.position === 'r'" 
      class="material-icons mdc-button__icon" 
      aria-hidden="true"
    >
    {{icon.name}}</span>

    <span v-if="subtype=='fab'" class="mdc-fab__icon material-icons">{{icon.name}}</span>

  </button>
</template>

<script src="./script.js">

</script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>