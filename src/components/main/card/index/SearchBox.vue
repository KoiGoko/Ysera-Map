<template xmlns="http://www.w3.org/1999/html">
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-card width="300" class="search-card rounded">
          <v-text-field
            bg-color="white"
            v-model="searchText"
            :placeholder="placeholderText"
            rounded
            dense
            class="search-field no-focus-outline rounded-0"
            v-bind="props"
          />
          <v-btn variant="flat" icon color="white" class="search-btn rounded-0">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <slot/>
<!--          <v-btn variant="flat" icon color="white" class="search-btn rounded-0">-->
<!--            <v-icon>mdi-account</v-icon>-->
<!--          </v-btn>-->
        </v-card>

      </template>
      <v-card elevation="2" width="300" height="400">
        <v-list-item active>hello</v-list-item>
        <v-list-item>world</v-list-item>
        <v-list-item>hao</v-list-item>
      </v-card>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const searchText = ref('')
const placeholderText = ref('Search')

</script>

<style scoped>
.search-card {
  background-color: white;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 10px;
  left: 10px;
  z-index: auto;
}

.search-field {
  flex-grow: 1;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
}

.search-btn {
  height: 100%;
}
</style>
