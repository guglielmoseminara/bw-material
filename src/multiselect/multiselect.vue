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
      <span class="mdc-notched-outline__notch"
      :class="{'bw-remove-border-top' : isOptionSelected()}"
      >
        <span id="outlined-select-label" class="mdc-floating-label">{{label}}</span>
      </span>
      <span class="mdc-notched-outline__trailing"></span>
    </span>
  </template>
  </div>

  <div class="mdc-select__menu mdc-menu mdc-menu-surface">
    <ul class="mdc-list">
      <!--fake li for floating label-->
      <li class="mdc-list-item hidden"
        :class="{'mdc-list-item--selected' : isOptionSelected()}"
        :data-value="getFormattedValue" 
        :aria-selected="isOptionSelected()"
      ></li>

      <li class="bw-menu-item" 
        v-for="(option, index) in internalOptions"
        :key="index" 
      >
        <bw-material-check 
          :name="option[configOptions.codeField]" 
          :value="option[configOptions.codeField]" 
          :label="option[configOptions.nameField || 'name']"
          v-model="option['checked']"
          @input="selectClicked(option, index)"
        >
        </bw-material-check>
      </li>
    </ul>
  </div>
</div>
</template>


<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>