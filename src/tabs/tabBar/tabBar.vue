<template>
<div
    :class="classes"
    role="tablist"
    @MDCTabBar:activated="onActivated"
  >
    <slot v-if="hasScroller" />
    <div
      v-else
      class="mdc-tab-scroller"
      :class="scrollerClass"
    >
      <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>


<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>