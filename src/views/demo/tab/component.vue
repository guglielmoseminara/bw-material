<template>
<div class="my-4">

  <bw-material-tab-bar @activated="tabActivated($event)">
    <bw-material-tab-scroller align="start">
      <bw-material-tab active>
        <i slot="icon" class="material-icons">home</i>
        Home
      </bw-material-tab>
      <bw-material-tab>
        <i slot="icon" class="material-icons">home</i>
        Like me
      </bw-material-tab>
      <bw-material-tab>
        About me
      </bw-material-tab>
    </bw-material-tab-scroller>
  </bw-material-tab-bar>

  <br><br>

STACKED ICON AND FADE STYLE: 
  <bw-material-tab-bar @activated="tabActivated($event)">
    <bw-material-tab-scroller align="start">
      <bw-material-tab fade active stacked>
        <i slot="icon" class="material-icons">home</i>
        Home
      </bw-material-tab>
      <bw-material-tab fade stacked>
        <i slot="icon" class="material-icons">favorite</i>
        Like me
      </bw-material-tab>
      <bw-material-tab fade stacked>
        <i slot="icon" class="material-icons">person</i>
        About me
      </bw-material-tab>
    </bw-material-tab-scroller>
  </bw-material-tab-bar>

  <br><br>

TAB SCROLLER IN MOBILE:

<div style="width: 200px">

  <bw-material-tab-bar color="secondary" @activated="tabActivated($event)">
    <bw-material-tab-scroller align="start">
      <bw-material-tab active>
        <i slot="icon" class="material-icons">home</i>
        Home
      </bw-material-tab>
      <bw-material-tab>
        Like me
      </bw-material-tab>
      <bw-material-tab>
        About me
      </bw-material-tab>
    </bw-material-tab-scroller>
  </bw-material-tab-bar>
</div>

  <br><br>
  CUSTOM TAB BAR CONTENT:
  <bw-material-tab-bar @activated="tabActivated($event)">
    <div class="mdc-tab-scroller">
    <div class="mdc-tab-scroller__scroll-area">
      <div class="mdc-tab-scroller__scroll-content">
         <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
          <span class="mdc-tab__content">
            <span class="mdc-tab__icon material-icons" aria-hidden="true">favorite</span>
            <span class="mdc-tab__text-label">Favorites</span>
          </span>
          <span class="mdc-tab-indicator mdc-tab-indicator--active">
            <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
          </span>
          <span class="mdc-tab__ripple"></span>
        </button>
      </div>
    </div>
  </div>
  </bw-material-tab-bar>

</div>
</template>

<script src="./script.js"></script>

