<template>
<div class="mdc-select" @MDCSelect:change="onSelect($event)"
  :class="classes"
>
  <div class="mdc-select__anchor">
    <i class="mdc-select__dropdown-icon"></i>

  <template v-if="type==='contain'">
    <div class="mdc-select__selected-text"></div>
    <span class="mdc-floating-label">{{label}}</span>
    <div class="mdc-line-ripple"></div>
  </template>
  <template v-else>
    <div class="mdc-select__selected-text" 
      aria-labelledby="outlined-select-label">
    </div>
    <span class="mdc-notched-outline">
      <span class="mdc-notched-outline__leading"></span>
      <span class="mdc-notched-outline__notch">
        <span id="outlined-select-label" class="mdc-floating-label">{{label}}</span>
      </span>
      <span class="mdc-notched-outline__trailing"></span>
    </span>
  </template>
  </div>

  <div class="mdc-select__menu mdc-menu mdc-menu-surface">
    <ul class="mdc-list">     
      <li class="mdc-list-item" 
        :class="{'mdc-list-item--selected' : isOptionSelected(option)}"
        @click="selectClicked(option)" :data-value="option[configOptions.codeField]" 
        :aria-selected="isOptionSelected(option)"
        v-for="(option, index) in options"
        :key="index" 
      >
        {{option[configOptions.nameField || 'name']}}
      </li>
    </ul>
  </div>
</div>
</template>


<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>