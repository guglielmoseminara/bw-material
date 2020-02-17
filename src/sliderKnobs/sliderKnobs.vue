<template>
<div ref="slider" :class="classes">
  <vue-slider v-if="data.length === 0" ref="sliderThumb"
    v-model="myvalue"
    :min="min"
    :max="max"
    :marks="displayMarkers"
    :use-keyboard="true"
    :tooltip="tooltip"
    @change="changeModel($event)"
    >
  </vue-slider>
  <vue-slider v-else  ref="sliderThumb"
    v-model="myvalue"
    :min="min"
    :max="max"
    :data="data"
    :marks="displayMarkers"
    :use-keyboard="true"
    :tooltip="tooltip"
    @change="changeModel($event)"
    >
  </vue-slider>
</div>
  
</template>

<script src="./script.js"></script>


<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>