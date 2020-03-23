<template>
  <button
    v-if="href.length === 0"
    :class="classes"
    class="mdc-tab"
    :tabindex="active ? 0 : -1"
    :aria-selected="active"
    role="tab"
    @MDCTab:interacted="onInteracted"
  >
    <span class="mdc-tab__content">
      <slot name="icon" />
      <span class="mdc-tab__text-label">
        <slot />
      </span>
      <span
        v-if="spanningOnlyContent && !hasIndicator"
        :class="indicatorClasses"
        class="mdc-tab-indicator"
      >
        <span
          class="mdc-tab-indicator__content"
          :class="indicatorContentClasses"
        >{{ indicatorIcon }}</span>
      </span>
      <slot
        v-if="spanningOnlyContent"
        name="indicator"
      />
    </span>
    <span
      v-if="!spanningOnlyContent && !hasIndicator"
      :class="indicatorClasses"
      class="mdc-tab-indicator"
    >
      <span
        class="mdc-tab-indicator__content"
        :class="indicatorContentClasses"
      >{{ indicatorIcon }}</span>
    </span>
    <slot
      v-if="!spanningOnlyContent"
      name="indicator"
    />
    <span class="mdc-tab__ripple" />
  </button>
  <a
    v-else
    :href="href"
    :class="classes"
    class="mdc-tab"
    tabindex="-1"
    aria-selected="false"
    role="tab"
    @MDCTab:interacted="onInteracted"
  >
    <span class="mdc-tab__content">
      <slot name="icon" />
      <span class="mdc-tab__text-label">
        <slot />
      </span>
      <span
        v-if="spanningOnlyContent && !hasIndicator"
        :class="indicatorClasses"
        class="mdc-tab-indicator"
      >
        <span
          class="mdc-tab-indicator__content"
          :class="indicatorContentClasses"
        >{{ indicatorIcon }}</span>
      </span>
      <slot
        v-if="spanningOnlyContent"
        name="indicator"
      />
    </span>
    <span
      v-if="!spanningOnlyContent && !hasIndicator"
      :class="indicatorClasses"
      class="mdc-tab-indicator"
    >
      <span
        class="mdc-tab-indicator__content"
        :class="indicatorContentClasses"
      >{{ indicatorIcon }}</span>
    </span>
    <slot
      v-if="!spanningOnlyContent"
      name="indicator"
    />
    <span class="mdc-tab__ripple" />
  </a>
</template>

<script src="./script.js"></script>


<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>