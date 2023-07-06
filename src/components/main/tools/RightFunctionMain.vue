<script setup lang="ts">

</script>
<template>
  <div class="function-card">
    <v-card class="rounded-pill d-flex justify-center align-center" color="white" width="36" height="300">
      <v-col class="pa-0">
        <v-btn height="36" variant="plain" icon="mdi-weather-hurricane"></v-btn>
        <v-btn height="36" variant="plain" icon="mdi-weather-cloudy"></v-btn>
        <v-btn height="36" variant="plain" icon="mdi-temperature-celsius"></v-btn>
      </v-col>
    </v-card>
  </div>

</template>

<style scoped>
.function-card {
  position: absolute;
  top: 80px;
  right: 20px;
}
</style>
