<template>
<footer class="bw-footer">
    <div :class="{'container': haveContainer}">
        <div v-if="$slots['topStart'] || $slots['topEnd']" class="bw-footer-container--top">
            <div v-if="$slots['topStart']" class="footer-top-start">
                <slot name="topStart"/>
            </div>
            <template v-if="linkGroups && (!$slots['middleStart'] && !$slots['middleEnd'])">
                <div v-for="(group, i) in linkGroups" :key="i" class="footer-link-container"
                    :class="group.classList"
                >
                    <template v-for="(link, j) in group.links">
                        <a v-if="link.href"
                            :href="link.href"
                            class="bw-cta-link"
                            :key="j"
                        >
                            {{ link.name }}
                        </a>
                        <p v-else :key="j"  class="bw-caption"> 
                            {{ link.name }} 
                        </p>
                    </template>
                </div>
            </template>
            <div v-else class="footer-top-center">
                <slot name="topCenter"/>
            </div>

            <div v-if="$slots['topEnd']" class="footer-top-end">
                <slot name="topEnd"/>
            </div>
        </div>
        
        
        <div v-if="$slots['middleStart'] || $slots['middleEnd'] || $slots['middleCenter']" 
            class="bw-footer-container--middle"
        >
            <div v-if="$slots['middleStart']" class="footer-middle-start">
                <slot name="middleStart"/>
            </div>
            <template v-if="linkGroups && !$slots['middleCenter']">
                <div v-for="(group, i) in linkGroups" :key="i" class="footer-link-container"
                    :class="group.classList"
                >
                    <template v-for="(link, j) in group.links">
                        <a v-if="link.href"
                            :href="link.href"
                            class="bw-cta-link"
                            :key="j"
                        >
                            {{ link.name }}
                        </a>
                        <p v-else :key="j"  class="bw-caption"> 
                            {{ link.name }} 
                        </p>
                    </template>
                </div>
            </template>
            <template v-else>
                <div v-if="$slots['middleCenter']" class="footer-middle-center">
                    <slot name="middleCenter"/>
                </div>
            </template>

            <div v-if="$slots['middleEnd']" class="footer-middle-end">
                <slot name="middleEnd"/>
            </div>
        </div>

        <hr v-if="bottomLinksGroups || $slots['bottomSlot']" class="mdc-list-divider">
        
        <div v-if="bottomLinksGroups" class="bw-footer-container--bottom">
            <div v-for="(group, i) in bottomLinksGroups" :key="i" 
                :class="group.classList"
            >
                <template v-for="(link, j) in group.links">
                    <a v-if="link.href"
                        :href="link.href"
                        class="bw-cta-link"
                        :key="j"
                    >
                        {{ link.name }}
                    </a>
                    <p v-else :key="j"  class="bw-caption"> 
                        {{ link.name }} 
                    </p>
                </template>
            </div>
        </div>
        <template v-else class="footer-bottom">
            <slot name="bottomSlot"/>
        </template>
    </div>
</footer>
</template>

<script src="./script.js"></script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>