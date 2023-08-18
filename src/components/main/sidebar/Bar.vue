<template>
  <v-navigation-drawer
    v-model="drawer"
    location="left"
    temporary
  >
    <v-list
      :items="items"
    ></v-list>
  </v-navigation-drawer>

  <v-navigation-drawer
    location="left"
    width="64"
  >
    <v-list>
      <v-btn class="rounded-circle" variant="plain">
        <v-icon @click.stop="drawer = !drawer">mdi-menu</v-icon>
      </v-btn>
    </v-list>

  </v-navigation-drawer>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';

const drawer = ref(false);
const group = ref<string | null>(null);

const items = [
  {title: 'Foo', value: 'foo'},
  {title: 'Bar', value: 'bar'},
  {title: 'Fizz', value: 'fizz'},
  {title: 'Buzz', value: 'buzz'},
];

watch(group, () => {
  drawer.value = false;
});
</script>

<style scoped>

</style>
