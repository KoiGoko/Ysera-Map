<template>
  <v-responsive>
    <v-list-item>

    </v-list-item>
  </v-responsive>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';

const drawer = ref(false);
const group = ref<string | null>(null);


watch(group, () => {
  drawer.value = false;
});
</script>

<style scoped>

</style>
