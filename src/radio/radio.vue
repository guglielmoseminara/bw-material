<template>
<div>
    <div class="mdc-form-field" ref="mdcFormField" 
        :class="classList"
    >
        <div class="mdc-radio" ref="mdcRadio">
            <input type="radio"
               :id="id"
               :name="name"
               :value="value"
               :required="required"
               :disabled="disabled"
               @change="onChange"
               class="mdc-radio__native-control"
               :checked="state">
            <div class="mdc-radio__background">
                <div class="mdc-radio__outer-circle"></div>
                <div class="mdc-radio__inner-circle"></div>
            </div>
            <div class="mdc-radio__ripple"></div>
        </div>
        <label :for="id"
        >
        {{ label }}
        </label>
    </div>
</div>
</template>

<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>
