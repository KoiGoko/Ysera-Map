<template>
  <v-card>
      <v-navigation-drawer
        expand-on-hover
        rail
        width="200"
        permanent
        color="primary"
        elevation="0"
      >
        <v-list-item
          nav
        >
          <template v-slot:append>
          </template>
        </v-list-item>
        <slot/>
      </v-navigation-drawer>
  </v-card>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
