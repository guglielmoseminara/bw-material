<template>
<div class="row mt-5">
    <div class="col-6 mt-5">
        <h3>ELEVATION DIRECTIVE</h3>
        <div class="mb-4" raised v-elevation="1">ELEVTION 1</div>
        <div class="mb-4" raised v-elevation="2">ELEVTION 2</div>
        <div class="mb-4" raised v-elevation="3">ELEVTION 3</div>
        <div class="mb-4" raised v-elevation="4">ELEVTION 4</div>
        <div class="mb-4" raised v-elevation="5">ELEVTION 5</div>
        <div class="mb-4" raised v-elevation="6">ELEVTION 6</div>
        <div class="mb-4" raised v-elevation="7">ELEVTION 7</div>
        <div class="mb-4" raised v-elevation="8">ELEVTION 8</div>
        <div class="mb-4" raised v-elevation="9">ELEVTION 9</div>
        <div class="mb-4" raised v-elevation="10">ELEVTION 10</div>

        <bw-material-button raised v-elevation="4" :have-shadow="false"
              label="my label" class="mb-4" type="contain" color="secondary" 
              size="small"
        ></bw-material-button>
    </div>

    <div class="col-6 mt-5">
        <h3>Typography</h3>
        <p class="mdc-typography--headline1">H1</p>
        <p class="mdc-typography--headline2">H2</p>
        <p class="mdc-typography--headline3">H3</p>
        <p class="mdc-typography--headline4">H4</p>
        <p class="mdc-typography--headline5">H5</p>
        <p class="mdc-typography--headline6">H6</p>

        <p class="mdc-typography--subtitle1">Subtitle 1</p>
        <p class="mdc-typography--subtitle2">Subtitle 2</p>
        <p class="mdc-typography--body1">Body 1</p>
        <p class="mdc-typography--body2">Body 2</p>
        <p class="mdc-typography--caption">Caption</p>
        <p class="mdc-typography--overline">Overline</p>

        <p class="bw-cta-link">Cta link</p>
    </div>
</div>
</template>

<script src="./script.js"></script>

