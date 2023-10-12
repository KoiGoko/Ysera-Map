<script setup lang="ts">

</script>

<template>
  <div class="search-top">
    <v-row class="mx-0 my-0">
      <v-card elevation="1" variant="flat" color="primary" class="rounded-pill d-flex" height="48" width="220">
        <v-text-field color="primary" density="comfortable" variant="solo">
        </v-text-field>
      </v-card>
      <v-btn elevation="1" variant="flat" color="primary" class="ml-1" size="48" icon="mdi-magnify"></v-btn>
    </v-row>
  </div>


</template>

<style scoped>
.search-top {
  position: absolute;
  top: 8px;
  left: 88px;
}
</style>
