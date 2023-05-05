<template>
  <v-card color="primary" class="d-flex rounded-0 align-center" width="300" height="100%">
    <v-btn
      color="red"
      class="d-flex circle-btn"
      icon="mdi-plus"
    >
    </v-btn>
  </v-card>
</template>

<script setup lang="ts">
</script>

<style scoped>
.circle-btn {
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
</style>
