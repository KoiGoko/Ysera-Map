<template>
  <v-card color="white" class="d-flex rounded-0 align-center" width="300" height="100%">
    <v-btn
      color="red"
      class="d-flex circle-btn"
      icon="mdi-plus"
      @click="showCard = true"
    ></v-btn>
    <v-card
      v-if="showCard"
      width="300"
      height="100%"
      class="position-absolute"
      style="top: 0; right: 0;"
    >
      <v-card-actions>
        <v-btn color="red" @click="showCard = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const showCard = ref(false);
</script>

<style scoped>
</style>
