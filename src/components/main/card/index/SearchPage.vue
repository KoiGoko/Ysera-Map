<script setup lang="ts">
import SearchResultPage from "@/components/main/card/index/SearchResultPage.vue";
import SearchBox from "@/components/main/card/index/SearchBox.vue";
import {ref} from "vue";

const showSearchResult = ref(false)
const searchText = ref('')
const placeholderText = ref('Search')
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
        <v-list-item active>hello</v-list-item>
        <v-list-item>world</v-list-item>
        <v-list-item>hao</v-list-item>
      </v-card>
    </v-menu>
  </div>
  <div>
    <v-card class="res" v-show="showSearchResult" color="white" width="400" height="100%">
    </v-card>
  </div>

</template>
<style scoped>
.box {
  position: relative;
  z-index: 3;
}

.res {
  position: fixed;
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

