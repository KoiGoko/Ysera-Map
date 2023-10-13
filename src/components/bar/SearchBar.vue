<script setup lang="ts">
import {ref} from "vue";

const top = ref(80)

</script>

<template>
  <div class="geocoder" ref="geocoderRef">
  </div>
</template>

<style scoped>
.geocoder {
  position: absolute;
  top: 8px;
  left: 400px;
}
</style>
