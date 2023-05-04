<template>
  <v-menu
    location-strategy="static"
    transition="scale-transition"
  >
    <template v-slot:activator="{ props }">
      <v-btn variant="flat" v-bind="props" icon color="white" class="search-btn rounded-0">
      <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>
    <v-card elevation="2" width="300" height="400"></v-card>
  </v-menu>
</template>
<script>
import {defineComponent} from "vue";
import CardMain from "@/components/main/card/CardMain.vue";

export default defineComponent({
  components: {CardMain}
})
</script>

<style>
.card1 {
  position: absolute;
  top: 29px;
  left: 50px;
}
</style>
