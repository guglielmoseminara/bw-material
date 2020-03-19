<template>
<footer class="bw-footer">
    <div :class="{'container': haveContainer}">
        <div v-if="isNotEmptySlot('topStart') || isNotEmptySlot('topEnd')" class="bw-footer-container--top">
            <div v-if="isNotEmptySlot('topStart')" class="footer-top-start">
                <slot name="topStart"/>
            </div>
            <template v-if="linkGroups && (!isNotEmptySlot('middleStart') && !isNotEmptySlot('middleEnd'))">
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

            <div v-if="isNotEmptySlot('topEnd')" class="footer-top-end">
                <slot name="topEnd"/>
            </div>
        </div>
        
        
        <div v-if="isNotEmptySlot('middleStart') || isNotEmptySlot('middleEnd') || isNotEmptySlot('middleCenter')" 
            class="bw-footer-container--middle"
        >
            <div v-if="isNotEmptySlot('middleStart')" class="footer-middle-start">
                <slot name="middleStart"/>
            </div>
            <template v-if="linkGroups && !isNotEmptySlot('middleCenter')">
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
                <div v-if="isNotEmptySlot('middleCenter')" class="footer-middle-center">
                    <slot name="middleCenter"/>
                </div>
            </template>

            <div v-if="isNotEmptySlot('middleEnd')" class="footer-middle-end">
                <slot name="middleEnd"/>
            </div>
        </div>

        <hr v-if="bottomLinksGroups || isNotEmptySlot('bottomSlot')" class="mdc-list-divider">
        
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