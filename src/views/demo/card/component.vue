<template>
<div class="row mt-5">
    <div class="col-6 mb-5">
      With primary action flag set to true, the content will be automatically rendered inside mdc-card__primary-action. (case 1)
      <bw-material-card :primary-action="true">
        <bw-material-card-media :sixteen-nine="true"
          style="background-image: url(&quot;https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg&quot;);"
        ></bw-material-card-media>
        <div class="card-header__primary m-3">
          <h2 class="mdc-typography mdc-typography--headline6">
            Our Changing Planet
          </h2>
          <h3 class="mdc-typography mdc-typography--body2">
            by Kurt Wagner
          </h3>
        </div>
        <div class="card-body__secondary mdc-typography mdc-typography--body2 m-3">
          Visit ten places on our planet that are undergoing the biggest changes today.
        </div>

        <template slot="actions">
          <bw-material-button label="my label" type="text" size="small" :have-shadow="false"
          ></bw-material-button>
          <bw-material-button label="my label" type="text" size="small" :have-shadow="false"
          ></bw-material-button>
        </template>
      </bw-material-card>
        <br>
        You can also specify multiple  'bw-material-card-primary-action' tag with no flag specification. (case 2)
        To display buttons and icons in the same row, wrap them in actionButtons and actionIcons slots.
        <br>
      <bw-material-card>
        <bw-material-card-primary-action>
          <bw-material-card-media
            style="background-image: url(&quot;https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg&quot;);"
          ></bw-material-card-media>
          <div class="card-header__primary m-3">
              <h2 class="mdc-typography mdc-typography--headline6">
                  Our Changing Planet
              </h2>
              <h3 class="mdc-typography mdc-typography--body2">
                  by Kurt Wagner
              </h3>
          </div>
          <div class="card-body__secondary mdc-typography mdc-typography--body2 m-3">
              Visit ten places on our planet that are undergoing the biggest changes today.
          </div>
        </bw-material-card-primary-action>
        <template slot="actionButtons">
          <bw-material-button label="my label" type="text" size="small" :have-shadow="false"
          ></bw-material-button>
          <bw-material-button label="my label" type="text" size="small" :have-shadow="false"
          ></bw-material-button>
        </template>
        <template slot="actionIcons">
          <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="Share" data-mdc-ripple-is-unbounded="true">share</button>
          <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="More options" data-mdc-ripple-is-unbounded="true">more_vert</button>
        </template>
      </bw-material-card>
    </div>

    <div class="col-6 mb-5"> 
      To have a single action button take up the entire width of the action row, use fullBleedAction prop.<br>
      <bw-material-card :full-bleed-action="true">
        <bw-material-card-primary-action>
          <bw-material-card-media
            style="background-image: url(&quot;https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg&quot;);"
          ></bw-material-card-media>
          <div class="card-header__primary m-3">
              <h2 class="mdc-typography mdc-typography--headline6">
                  Our Changing Planet
              </h2>
              <h3 class="mdc-typography mdc-typography--body2">
                  by Kurt Wagner
              </h3>
          </div>
          <div class="card-body__secondary mdc-typography mdc-typography--body2 m-3">
              Visit ten places on our planet that are undergoing the biggest changes today.
          </div>
        </bw-material-card-primary-action>
        <template slot="actions">
          <bw-material-button class="mdc-card__action--button" label="my label" type="contain" size="small"
          ></bw-material-button>
        </template>
      </bw-material-card>
    </div>

    <div class="col-6 mb-5"> 
      <br><br>
      <bw-material-card :full-bleed-action="true">
        <bw-material-card-primary-action>
          <div class="card-header__primary m-3">
            <h2 class="mdc-typography mdc-typography--headline6">
              Our Changing Planet
            </h2>
            <h3 class="mdc-typography mdc-typography--body2">
              by Kurt Wagner
            </h3>
          </div>
          <bw-material-card-media
            style="background-image: url(&quot;https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg&quot;);"
          ></bw-material-card-media>
          <div class="card-body__secondary mdc-typography mdc-typography--body2 m-3">
              Visit ten places on our planet that are undergoing the biggest changes today.
          </div>
        </bw-material-card-primary-action>
      </bw-material-card>
    </div>

    <div class="col-6 mb-5"> 
      <br><br>
      <bw-material-card type="horizontal">
        <bw-material-card-primary-action>
          <div class="card-header__primary m-3">
            <h2 class="mdc-typography mdc-typography--headline6">
              Horizontal
            </h2>
            <h3 class="mdc-typography mdc-typography--body2">
              by Kurt Wagner
            </h3>
          </div>
          <bw-material-card-media class="m-3"
            style="width:80px; background-image: url(&quot;https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg&quot;);"
          ></bw-material-card-media>
        </bw-material-card-primary-action>
        <template slot="actionButtons">
          <bw-material-button label="my label" type="text" size="small" :have-shadow="false"
          ></bw-material-button>
          <bw-material-button label="my label" type="text" size="small" :have-shadow="false"
          ></bw-material-button>
        </template>
      </bw-material-card>
    </div>

    <div class="col-6 mb-5"> 
        <div class="mdc-card">
            <div class="mdc-card__primary-action" tabindex="0">
              <div class="mdc-card__media mdc-card__media--16-9" style="background-image: url(&quot;https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg&quot;);">
                <div class="mdc-card__media-content">
                  <div>
                    <h2 class="mdc-typography mdc-typography--headline6">Our Changing Planet</h2>
                    <h3 class="mdc-typography mdc-typography--subtitle2">by Kurt Wagner</h3>
                  </div>
                </div>
              </div>
              <div class="mdc-typography mdc-typography--body2">Visit ten places on our planet that are undergoing the biggest changes today.</div>
            </div>
        </div>
    </div>
</div>
</template>

<script src="./script.js"></script>

