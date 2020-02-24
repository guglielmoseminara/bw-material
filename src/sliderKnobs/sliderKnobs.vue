<template>
<div ref="slider" :class="classes">
  <range-slider ref="sliderThumb"
    :min="min" :max="max"  :step="step"
    :start="myvalue[0]" :end="myvalue[1]"
    @slideEnd="slideEnd"
    :ball-width="12"
    :bar-height="2"
  >
  </range-slider>
</div>
  
</template>

<script src="./script.js"></script>


<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>