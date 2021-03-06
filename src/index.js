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
import BwMaterialSelect from "./select/select.vue";
import BwMaterialMultiselect from "./multiselect/multiselect.vue";
import BwMaterialMenu from "./menu/menu.vue";
import BwMaterialMenuAnchor from "./menuAnchor/menuAnchor.vue";
import BwMaterialMenuSurface from "./menuSurface/menuSurface.vue";
import BwMaterialList from "./list/list.vue";
import BwMaterialListItem from "./listItem/listItem.vue";
import BwMaterialDropdownMenu from "./dropdownMenu/dropdownMenu.vue";
import BwMaterialAbstractListItem from "./abstractListItem/abstractListItem.vue";

import BwMaterialTab from "./tabs/tab/tab.vue";
import BwMaterialTabBar from "./tabs/tabBar/tabBar.vue";
import BwMaterialTabIndicator from "./tabs/tabIndicator/tabIndicator.vue";
import BwMaterialTabScroller from "./tabs/tabScroller/tabScroller.vue";
import BwMaterialDatepicker from "./datepicker/datepicker.vue";
import VCalendar from 'v-calendar';



import Vue from 'vue';
// import routes from './router/index';

if (process.env.NODE_ENV == 'development') {
    import('./router/index').then( routes => {
        import('vue-router').then(Router => {
            Vue.use(Router);
            var app2 = new Vue({
              el: '#app',
              data: {
                message: 'You loaded this page on ' + new Date().toLocaleString()
              },
              router: routes
            });
        })
    });
}

export default {
    install(Vue, options) {
        Vue.use(VCalendar);
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
        Vue.component("bw-material-drawer", BwMaterialDrawer);
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
        Vue.component("bw-material-select", BwMaterialSelect);
        Vue.component("bw-material-multiselect", BwMaterialMultiselect);
        Vue.component("bw-material-menu", BwMaterialMenu);
        Vue.component("bw-material-menu-anchor", BwMaterialMenuAnchor);
        Vue.component("bw-material-menu-surface", BwMaterialMenuSurface);
        Vue.component("bw-material-list", BwMaterialList);
        Vue.component("bw-material-list-item", BwMaterialListItem);
        Vue.component("bw-material-dropdown-menu", BwMaterialDropdownMenu);
        Vue.component("bw-material-abstract-list-item", BwMaterialAbstractListItem);
        Vue.component("bw-material-tab", BwMaterialTab);
        Vue.component("bw-material-tab-bar", BwMaterialTabBar);
        Vue.component("bw-material-tab-indicator", BwMaterialTabIndicator);
        Vue.component("bw-material-tab-scroller", BwMaterialTabScroller);
        Vue.component("bw-material-datepicker", BwMaterialDatepicker);



        Vue.mixin({
        methods: {
            isNotEmptySlot(slotName) {
                return (
                    this.$slots[slotName] && 
                    this.$slots[slotName][0] && 
                    (this.$slots[slotName][0].children || this.$slots[slotName][0].text || this.$slots[slotName][0].tag)
                );
            }
        }
        });

        // DIRECTIVE
        Vue.directive('elevation', {
            bind: function (el, binding) {
                setTimeout(()=> {
                if (binding.value != null) {
                    const n = Number(binding.value)
                    el.classList.add(`mdc-elevation--z${n}`)
                }
                if (binding.modifiers.transition) {
                    el.classList.add('mdc-elevation-transition')
                }
                }, 1);
            },
            componentUpdated: function (el, binding) {
                if (Number(binding.oldValue) !== Number(binding.value)) {
                if (binding.oldValue != null) {
                    const n = Number(binding.oldValue)
                    el.classList.remove(`mdc-elevation--z${n}`)
                }
                if (binding.value != null) {
                    const n = Number(binding.value)
                    el.classList.add(`mdc-elevation--z${n}`)
                }
                }
                if (!binding.modifiers.transition && el.classList.contains('mdc-elevation-transition')) {
                el.classList.remove('mdc-elevation-transition')
                }
                if (binding.modifiers.transition && !el.classList.contains('mdc-elevation-transition')) {
                el.classList.add('mdc-elevation-transition')
                }
            },
            unbind: function (el, binding) {
                if (binding.value != null) {
                const n = Number(binding.value)
                el.classList.remove(`mdc-elevation--z${n}`)
                }
                if (binding.modifiers.transition) {
                el.classList.remove('mdc-elevation-transition')
                }
            }
            })
    }
};
