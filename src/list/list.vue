<template>
  <ul
    v-if="tag === 'ul'"
    :class="classes"
    class="mdc-list"
    v-bind="$attrs"
    @MDCList:action="onAction"
    @_init="onParentInit"
  >
    <slot />
  </ul>
  <nav
    v-else-if="tag === 'nav'"
    :class="classes"
    class="mdc-list"
    v-bind="$attrs"
    @MDCList:action="onAction"
    @_init="onParentInit"
  >
    <slot />
  </nav>
  <div
    v-else-if="tag === 'div'"
    :class="classes"
    class="mdc-list"
    v-bind="$attrs"
    @MDCList:action="onAction"
    @_init="onParentInit"
  >
    <slot />
  </div>
</template>

<script src="./script.js">

</script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>