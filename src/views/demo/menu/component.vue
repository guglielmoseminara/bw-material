<template>
<div>
  <bw-material-menu-anchor>
    <bw-material-button @click-btn="isMenuOpen=true">open</bw-material-button>
    <!-- use only with list -->
    <bw-material-menu v-model="isMenuOpen">
      <bw-material-list>
      <bw-material-list-item>list item 1</bw-material-list-item>
      <bw-material-list-item>list item 2</bw-material-list-item>
    </bw-material-list>
    </bw-material-menu>
  </bw-material-menu-anchor>

  <bw-material-menu-anchor>
    <button id="menu-surface-button" @click="open=true">Open Menu Surface</button>
    <!-- use with custom slot -->
    <bw-material-menu-surface v-model="open">
      this is a custom menu slot (no list inside)
    </bw-material-menu-surface>
  </bw-material-menu-anchor>

</div>
</template>

<script src="./script.js"></script>

