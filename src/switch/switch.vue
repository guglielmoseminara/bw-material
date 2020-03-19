<template>
<div>
    <div class="mdc-switch" ref="mdcSwitch" 
        :class="[value ? ('mdc-switch--checked '+ classes) : classes]"
    >
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
            <div class="mdc-switch__thumb">
                <input type="checkbox"  class="mdc-switch__native-control"
                  :disabled="disabled" @change="trigger" :checked="value" role="switch"
                  :id="id"
                >
            </div>
        </div>
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