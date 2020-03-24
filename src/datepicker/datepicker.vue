<template>
    <div class="bw-picker" :class="classes">
      <v-date-picker
        :mode="isRange ? 'range' : ''"
        @input="update"
        :value="value"
      >
        <!--Custom Input Slot-->
        <bw-material-text-field slot-scope="{ inputProps, inputEvents, isDragging }" v-bind="inputProps" :placeholder="placeholder"
          @change="inputEvents" id="date" 
          :outlined="outlined"
          :color="color"
          :class="[` ${ isDragging ? 'dargging' : '' }`]"
         >
            <bw-material-text-field-icon v-if="icon && icon.position == 'l'" 
              :icon="icon.name" slot="leadingIcon">
            </bw-material-text-field-icon>

            <bw-material-floating-label for="date"> {{ label }} </bw-material-floating-label>
           
            <bw-material-text-field-icon v-if="icon && icon.position == 'r'" 
              :icon="icon.name" slot="trailingIcon">
            </bw-material-text-field-icon>
           
            <bw-material-text-field-icon icon="date" slot="trailingIcon"></bw-material-text-field-icon>
            <bw-material-line-ripple slot="bottomLine"/>
        </bw-material-text-field>
      </v-date-picker>
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>
