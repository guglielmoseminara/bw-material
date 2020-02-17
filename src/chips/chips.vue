<template>
  <div
    :class="classes"
    class="mdc-chip-set"
  >
    <template v-if="choice">
      <bw_chip v-for="(chip, index) in options" :color="color" :type="type"
        :key="index" 
        :value="chip[configOptions.codeField] == value"
        @clicked="onClick($event, index)"
      >
        <i class="material-icons" v-if="chip.icon"
          slot="leadingIcon">{{chip.icon}} 
        </i>
        {{ chip[configOptions.nameField] }}
      </bw_chip>
    </template>

    <template v-if="filter">
      <bw_chip v-for="(chip, index) in options" :color="color" :type="type"
        :is-filter="true"
        :key="index" 
        :value="isContained(chip)"
        @clicked="onClick($event, index)"
      >
        <i class="material-icons" v-if="chip.icon"
          slot="leadingIcon">{{chip.icon}} 
        </i>
        {{ chip[configOptions.nameField] }}
      </bw_chip>
    </template>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>