<template>
  <div class="doc-demo-preview" :class="{ 'fixed-class': fixed }">
    <iframe :src="url" id="quark-demo" frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs } from "vue";

export default defineComponent({
  name: "DocDemoPreview",
  props: {
    url: String,
    type: String,
    fixed: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.doc-demo-preview {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  overflow: hidden;
  position: fixed;
  right: 30px;
  top: 88px;
  min-height: 620px;
  width: 360px;
  iframe {
    height: 590px;
    width: 100%;
    border-radius: 12px;
  }
}
.fixed-class {
  top: 100px;
}
</style>
