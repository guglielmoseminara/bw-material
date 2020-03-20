<template>
<div>

  <bw-material-list>
    <bw-material-list-item tabindex="0">
        <template slot="text">slot text item</template>
    </bw-material-list-item>
    <bw-material-list-item>
        <template slot="text">slot text item 2</template>
    </bw-material-list-item>
    <bw-material-list-item activated>
        <template slot="graphic"><div class="material-icons">add</div></template>
        <template slot="text">slot text item 3 activated</template>
        <template slot="meta"><div class="material-icons">add</div></template>

    </bw-material-list-item>
  </bw-material-list>

  <bw-material-list two-line>
    <bw-material-list-item tabindex="0">
        <template slot="primaryText">First-line text</template>
        <template slot="secondaryText">Second-line text</template>
    </bw-material-list-item>
    <bw-material-list-item>
        <template slot="primaryText">First-line text</template>
        <template slot="secondaryText">Second-line text</template>
        <template slot="meta">slot meta</template>
    </bw-material-list-item>
    <bw-material-list-item>
        <template slot="primaryText">First-line text</template>
        <template slot="secondaryText">Second-line text</template>
    </bw-material-list-item>
  </bw-material-list>

  <bw-material-list>
    <bw-material-list-item>list item 1</bw-material-list-item>
    <bw-material-list-item>list item 2</bw-material-list-item>
  </bw-material-list>

</div>
</template>

<script src="./script.js"></script>

