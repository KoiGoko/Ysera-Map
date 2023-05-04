<template>
  <v-card width="300" class="search-card rounded">
    <v-text-field
      bg-color="white"
      v-model="searchText"
      :placeholder="placeholderText"
      rounded
      dense
      class="search-field no-focus-outline rounded-0"
    />
    <v-btn variant="flat" icon color="white" class="search-btn rounded-0">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <MyMenu class="search-btn" ref="myMenu" />
  </v-card>
</template>

<script>
import MyMenu from "@/components/main/card/index/IndexIsland.vue";
export default {
  name: "SearchBox",
  components: {
    MyMenu,
  },
  data() {
    return {
      searchText: "",
      placeholderText: "Search",
    };
  },
};
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
