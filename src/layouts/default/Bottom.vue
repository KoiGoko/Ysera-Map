<script setup lang="ts">
import {ref} from "vue"
import SwitchLayer from "@/components/bar/SwitchLayer.vue";

const layerSelected = ref(false)

</script>

<template>
  <div class="switch-layer">
    <switch-layer/>
  </div>
</template>

<style scoped>
.switch-layer {
  display: flex;
  left: calc(72px + 16px);
  bottom: 8px;
  position: absolute;
}
</style>
