<script setup lang="ts">
import SearchResultPage from "@/components/main/card/index/SearchResultPage.vue";
import SearchBox from "@/components/main/card/index/SearchBox.vue";
import {ref} from "vue";
const showSearchResult = ref(false)
</script>
<template>
  <div>
    <SearchBox>
      <v-btn @click="showSearchResult = true" variant="flat" icon color="white" class="search-btn rounded-0">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </SearchBox>
    <SearchResultPage v-if="showSearchResult"/>
  </div>
</template>
<style scoped>

</style>
