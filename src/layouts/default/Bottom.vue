<script setup lang="ts">
import SwitchLayer from "@/components/bar/SwitchLayer.vue";

</script>

<template>
  <div class="switch-layer">
    <router-view name="bottom"></router-view>
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
