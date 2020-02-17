<template>
  <div
    :aria-disabled="disabled"
    :class="classes"
    class="mdc-slider"
    role="slider"
    tabindex="0"
    :aria-valuemin="min" :aria-valuemax="max" :aria-valuenow="value"
    v-bind="$attrs"
    @MDCSlider:change="onChange"
    @MDCSlider:input="onInput"
  >
    <div class="mdc-slider__track-container">
      <div class="mdc-slider__track"></div>
      <div
        v-if="displayMarkers"
        class="mdc-slider__track-marker-container"
      ></div>
    </div>
    <div
      v-if="discrete"
      class="mdc-slider__thumb-container"
    >
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker" />
      </div>
      <svg
        class="mdc-slider__thumb"
        width="21" ref="sliderThumb"
        height="21"
      >
        <circle  
          cx="10.5"
          cy="10.5"
          r="7.875"
        />
      </svg>
      <div class="mdc-slider__focus-ring"></div>
    </div>
    <div
      v-else
      class="mdc-slider__thumb-container"
    >
      <svg
        class="mdc-slider__thumb"
        width="21" ref="sliderThumb"
        height="21"
      >
        <circle
          cx="10.5"
          cy="10.5"
          r="7.875"
        />
      </svg>
      <div class="mdc-slider__focus-ring"></div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>
