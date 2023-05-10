<template>
  <v-card>
    <v-navigation-drawer
      rail
      v-model="drawer"
      expand-on-hover
      width="180"
      permanent
      color="primary"
      elevation="0"
      class="rounded"
    >
      <slot/>
      <v-divider class="pa-2"></v-divider>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn icon="mdi-account" block rounded>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const drawer = ref(true)
</script>

<style scoped>
</style>
