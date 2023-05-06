<script setup lang="ts">
import {reactive, ref} from "vue";
const showSearchResult = ref(false)
const searchText = ref('')
const placeholderText = ref('Search')
const items = reactive([
  {text: 'Real-Time', icon: 'mdi-clock'},
  {text: 'Audience', icon: 'mdi-account'},
  {text: 'Conversions', icon: 'mdi-flag'}])
</script>
<template>
  <div class="box">
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
          <v-btn @click="showSearchResult = true" variant="flat" icon color="white" class="search-btn rounded-0">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn @click="showSearchResult = true" variant="flat" icon color="white" class="search-btn rounded-0">
            <v-icon>mdi-account</v-icon>
          </v-btn>
          <slot/>
        </v-card>

      </template>
      <v-card elevation="2" width="300" height="400">
        <v-list density="compact">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            active-color="red"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
  <div>
    <v-card class="res d-flex align-center justify-center" v-if="showSearchResult" color="white" width="330"
            height="100%">
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-btn color="red" @click="showSearchResult = false">close</v-btn>
      </v-card-actions>
    </v-card>
  </div>

</template>
<style scoped>
.box {
  position: relative;
  z-index: 3;
}

.res {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.search-card {
  background-color: white;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 10px;
  left: 10px;
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

