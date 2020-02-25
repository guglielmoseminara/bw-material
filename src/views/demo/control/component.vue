<template>

<div class="row mt-5">
    <div class="col-6 my-5">
        <h3>RADIO</h3>
        <h6>bw_radio single usage</h6>
        <bw-material-radio name="robot" value="0" label="field 0"  v-model="singleRadioModel">
        </bw-material-radio>
        <bw-material-radio color="secondary" name="robot" value="1" 
            label="field 1"  
            v-model="singleRadioModel"
        >
        </bw-material-radio>

        <br>
        {{singleRadioModel}}
    </div>
    <div class="col-6 my-5">
        <h3>CHECKBOX</h3>
        <h6>bw_radio single usage</h6>
        <bw-material-check name="flower" value="cyclamen" label="cyclamen"  v-model="singleCheckModel">
        </bw-material-check>
        <bw-material-check color="primary" name="flower" value="daisy" 
            label="daisies"  
            v-model="singleCheckModel"
        >
        </bw-material-check>

        {{singleCheckModel}}
    </div>

    <div class="col-6">
        <h3>SWITCH</h3>
        <bw-material-switch color="primary" value="singleSwitchModel" 
            label="switch label"  
            v-model="singleSwitchModel"
        >
        </bw-material-switch>

        <bw-material-switch value="singleSwitchModel" 
            label="switch label"  
            v-model="singleSwitchModel"
            color="secondary"
        >
        </bw-material-switch>
    </div>

    <div class="col-6">
        <h3>MATERIAL SLIDER</h3>
        <bw-material-slider
            :min="0"
            :max="100"
            v-model="singleSliderModel"
        >
        </bw-material-slider>

        <bw-material-slider
            :min="0"
            :max="100"
            :discrete="true"
            :step="5"
            v-model="singleSliderModel"
        >
        </bw-material-slider>

        with ticks version: 
        <bw-material-slider
            :min="0"
            :max="100"
            :discrete="true"
            :display-markers="true"
            color="secondary"
            :step="5"
            v-model="singleSliderRangeModel"
            >
        </bw-material-slider>
        {{singleSliderModel}}


        <h3 class="mt-5">SLIDER <a href="https://nightcatsama.github.io/vue-slider-component">docs</a></h3>
        

        singleSliderModelKnobs: @{{singleSliderModelKnobsRange}}
        <bw-material-slider-knobs
            :min="9"
            :max="99"
            v-model="singleSliderModelKnobsRange"
        >
        </bw-material-slider-knobs>

        <!--OLDER VERSION
            singleSliderModelKnobs: @{{singleSliderModelKnobs}}
        <bw-material-slider-knobs
            :min="0"
            :max="100"
            color="secondary"
            v-model="singleSliderModelKnobs"
        >
        </bw-material-slider-knobs>
        <br>
        singleSliderModelKnobsDiscrete: @{{singleSliderModelKnobsDiscrete}}
        <bw-material-slider-knobs
            :min="0"
            :max="100"
            tooltip="active"
            :display-markers="true"
            :data="['A', 'B', 'C', 'D']"
            v-model="singleSliderModelKnobsDiscrete"
        >
        </bw-material-slider-knobs>

        <br>
        singleSliderModelKnobsRange: @{{singleSliderModelKnobsRange}}
        <bw-material-slider-knobs
            :min="0"
            :max="100"
            v-model="singleSliderModelKnobsRange"
        >
        </bw-material-slider-knobs>

        <br> -->


        <h6 class="mt-4">Form generator usage</h6>
        <p>type: bw_slider-knobs. It's necessary to specify a schema formatter:</p>
        <pre>
        {
            type: "bw_slider_knobs",
            styleClasses: "color-secondary",
            model: "slider",
            formatter: {
                type: 'none'
            },
        }
        </pre>
         
    </div>

</div>
</template>

<script src="./script.js"></script>

