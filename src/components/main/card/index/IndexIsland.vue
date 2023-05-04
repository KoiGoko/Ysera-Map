<template>
  <v-menu
  >
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props">Show Menu</v-btn>
    </template>
    <v-card>
      <v-card-title>
        My Menu
      </v-card-title>
      <v-card-text>
        This is my menu.
      </v-card-text>
    </v-card>
  </v-menu>
</template>
<script setup lang="ts">
</script>
<style>
</style>
