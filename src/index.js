



import BwMaterialButton from "./button/button.vue";
import BwMaterialChip from "./chip/chip.vue";
import BwMaterialHeader from "./header/header.vue";
import BwMaterialRadio from "./radio/radio.vue";
import BwMaterialTextFieldCharCounter from "./textFieldCharCounter/textFieldCharCounter.vue";
import BwMaterialCard from "./card/card.vue";
import BwMaterialChips from "./chips/chips.vue";
import BwMaterialIconButton from "./iconButton/iconButton.vue";
import BwMaterialSlider from "./slider/slider.vue";
import BwMaterialTextFieldHelperLine from "./textFieldHelperLine/textFieldHelperLine.vue";
import BwMaterialCardMedia from "./cardMedia/cardMedia.vue";
import BwMaterialDrawer from "./drawer/drawer.vue";
import BwMaterialSliderKnobs from "./sliderKnobs/sliderKnobs.vue";
import BwMaterialTextFieldHelperText from "./textFieldHelperText/textFieldHelperText.vue";
import BwMaterialCardPrimaryAction from "./cardPrimaryAction/cardPrimaryAction.vue";
import BwMaterialFloatingLabel from "./floatingLabel/floatingLabel.vue";
import BwMaterialSwitch from "./switch/switch.vue";
import BwMaterialTextFieldIcon from "./textFieldIcon/textFieldIcon.vue";
import BwMaterialCheck from "./check/check.vue";
import BwMaterialFooter from "./footer/footer.vue";
import BwMaterialLineRipple from "./lineRipple/lineRipple.vue";
import BwMaterialTextField from "./textField/textField.vue";


export default {
    install(Vue, options) {
        Vue.component("bw-material-button", BwMaterialButton);      
        Vue.component("bw-material-chip", BwMaterialChip);
        Vue.component("bw-material-header", BwMaterialHeader);
        Vue.component("bw-material-radio", BwMaterialRadio);
        Vue.component("bw-material-text-field-char-counter", BwMaterialTextFieldCharCounter);
        Vue.component("bw-material-card", BwMaterialCard);
        Vue.component("bw-material-chips", BwMaterialChips);
        Vue.component("bw-material-icon-button", BwMaterialIconButton);
        Vue.component("bw-material-slider", BwMaterialSlider);
        Vue.component("bw-material-text-field-helper-line", BwMaterialTextFieldHelperLine);
        Vue.component("bw-material-card-media", BwMaterialCardMedia);
        Vue.component("bw-material-drawer   ", BwMaterialDrawer);
        Vue.component("bw-material-slider-knobs", BwMaterialSliderKnobs);
        Vue.component("bw-material-text-field-helper-text", BwMaterialTextFieldHelperText);
        Vue.component("bw-material-card-primary-action", BwMaterialCardPrimaryAction);
        Vue.component("bw-material-floating-label", BwMaterialFloatingLabel);
        Vue.component("bw-material-switch", BwMaterialSwitch);
        Vue.component("bw-material-text-field-icon", BwMaterialTextFieldIcon);
        Vue.component("bw-material-check", BwMaterialCheck);
        Vue.component("bw-material-footer", BwMaterialFooter);
        Vue.component("bw-material-line-ripple", BwMaterialLineRipple);
        Vue.component("bw-material-text-field", BwMaterialTextField);
    }
};
