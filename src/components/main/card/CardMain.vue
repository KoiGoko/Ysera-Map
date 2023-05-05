<template>
    <v-btn
      color="red"
      class="d-flex circle-btn"
      icon="mdi-plus"
      @click="showCard = true"
    ></v-btn>
    <v-card
      v-if="showCard"
      width="300"
      height="800"
      class="position-absolute"
      style="top: 0; right: 0;"
    >
      <v-card-actions>
        <v-btn icon="mdi-plus" color="red" @click="showCard = false"></v-btn>
      </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const showCard = ref(false)
</script>

<style scoped>
</style>
