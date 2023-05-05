<template>
  <v-card>
    <v-navigation-drawer
      rail
      v-model="drawer"
      expand-on-hover
      width="200"
      permanent
      color="primary"
      elevation="0"
    >
      <slot/>
    </v-navigation-drawer>
  </v-card>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const drawer = ref(true)
</script>

<style scoped>
</style>
