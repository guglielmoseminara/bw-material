<template>

<div class="row mt-5">
  <div class="col-12 mt-5">
      <h3 class="mb-4">TEXT FIELD</h3>
      <h6>FROM material docs</h6>
      <p>NOTE: Do not use outlined to style a full width text field.</p>
      <p>NOTE: Do not use floating-label within fullwidth. Labels should not be included as part of the DOM structure of a full width text field.</p>
    
      <h5 class="my-3">Filled:</h5>
    <bw-material-text-field v-model="textFieldModel" id="my-text-field1" color="primary" placeholder="mah">
        <bw-material-text-field-icon icon="favorite" slot="leadingIcon"></bw-material-text-field-icon>
        <bw-material-floating-label for="my-text-field1">Hint text</bw-material-floating-label>
        <bw-material-text-field-icon icon="favorite" slot="trailingIcon"></bw-material-text-field-icon>
        <bw-material-line-ripple slot="bottomLine"/>
    </bw-material-text-field>

    <br><br>
    <bw-material-select type="outline" 
        label="label"
        color="secondary"
        v-model="selectModel" :options="selectOptions"
        :config-options="{codeField: 'id', nameField: 'name', 'valueField': 'id'}"
    ></bw-material-select>
    {{selectModel}}
    <br><br>


    <bw-material-select type="contain"
        label="label"
        v-model="selectModel2" :options="selectOptions"
    ></bw-material-select>
    {{selectModel2}}

    <br><br>

    <bw-material-select type="outline" 
        label="label"
        color="secondary"
        v-model="selectModel3" :options="selectOptions"
        :config-options="{codeField: 'code', nameField: 'name'}"
    ></bw-material-select>
    {{selectModel3}}
    <br><br>

    DISABLED
    <bw-material-select type="contain"
        label="label"
        :disabled="true"
        v-model="selectModel2" :options="selectOptions"
    ></bw-material-select>


    <br><br>
    <h5 class="mb-3">Disabled:</h5>
    <bw-material-text-field v-model="textFieldModel" id="my-text-field2" disabled>
        <bw-material-floating-label for="my-text-field2">Hint text</bw-material-floating-label>
        <bw-material-line-ripple slot="bottomLine"/>
    </bw-material-text-field>
    <br><br>
    <h5 class="mb-3">Helper text and char counter:</h5>
    <bw-material-text-field class="w-100" v-model="textFieldModel" id="my-text-field3" color="secondary" maxlength="20">
        <bw-material-floating-label for="my-text-field3">Full-Width Text Field </bw-material-floating-label>
        <bw-material-line-ripple slot="bottomLine"/>
    </bw-material-text-field>
    <bw-material-text-field-helper-line class="mdc-text-field-helper-line">
        <bw-material-text-field-helper-text>helper text</bw-material-text-field-helper-text>
        <bw-material-text-field-char-counter></bw-material-text-field-char-counter>
    </bw-material-text-field-helper-line>

    <br><br>
    <h5 class="mb-3">Textarea with counter:</h5>
    <bw-material-text-field v-model="textFieldModel" id="my-text-field4" textarea maxlength="200">
        <bw-material-floating-label for="my-text-field4">Hint text</bw-material-floating-label>
        <bw-material-text-field-char-counter></bw-material-text-field-char-counter>
    </bw-material-text-field>
    <br><br>

    <h5 class="my-3">Outlined:</h5>
    <bw-material-text-field v-model="textFieldModel" id="my-text-field5" outlined color="secondary">
        <bw-material-text-field-icon icon="favorite" slot="leadingIcon"></bw-material-text-field-icon>
        <bw-material-floating-label for="my-text-field5">Hint text</bw-material-floating-label>
    </bw-material-text-field>

    <h5 class="my-3">Float above: </h5>
    <bw-material-text-field v-model="textFieldModel" id="my-text-field6" outlined color="secondary">
        <bw-material-floating-label for="my-text-field6" float-above>Hint text</bw-material-floating-label>
    </bw-material-text-field>

  </div>
</div>
</template>

<script src="./script.js"></script>

