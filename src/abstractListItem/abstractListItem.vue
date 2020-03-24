<template>

  <span class="bw-list-item-label" v-if="!item.children">
    <router-link v-if="item.href" :to="item.href">
      {{ item.name }}
    </router-link>
    <template v-else>
      {{ item.name }}
    </template>
  </span>

  <bw-material-dropdown-menu 
    @change="emitChange($event)"
    v-else-if="internalListType === 'dropdown'"
    :label="item.name" 
    :list-items="item.children"
  >
  </bw-material-dropdown-menu>

</template>

<script src="./script.js">

</script>

<style lang="scss" rel='stylesheet/scss'>
    @import './style';
</style>