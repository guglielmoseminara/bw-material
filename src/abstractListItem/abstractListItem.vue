<template>
  <div class="bw-list-item-label" v-if="!item.children">
    {{ item.name }}
  </div>

  <bw-material-dropdown-menu v-else-if="internalListType === 'dropdown'"
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