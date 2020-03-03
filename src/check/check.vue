<template>
    <div class="mdc-form-field" ref="mdcFormField" 
        :class="classList"
    >
        <div class="mdc-checkbox" ref="mdcCheck">
            <input type="checkbox"
               :id="id"
               :name="name"
               :value="value"
               :required="required"
               :disabled="disabled"
               @click="onChange($event)"
               class="mdc-checkbox__native-control"
               :checked="state">
            <div class="mdc-checkbox__background">
                <svg class="mdc-checkbox__checkmark"
                    viewBox="0 0 24 24">
                    <path class="mdc-checkbox__checkmark-path"
                        fill="none"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                </svg>
                <div class="mdc-checkbox__mixedmark"></div>
            </div>
            <div class="mdc-checkbox__ripple"></div>
        </div>
        <label :for="id"
        >
        {{ label }}
        </label>
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>