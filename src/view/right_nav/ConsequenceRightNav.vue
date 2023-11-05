<script setup lang="ts">
import {ref} from "vue";
import RightMenuIcon from "@/components/bar/RightMenuIcon.vue";

const drawerRight = ref(true)

</script>
<template>

  <div>
    <v-btn color="primary" class="right-nav-open" @click="drawerRight = !drawerRight"
           icon
           elevation="1"
    >
      <RightMenuIcon></RightMenuIcon>
    </v-btn>
    <v-navigation-drawer
        location="right"
        width="364"
        height="100%"
        v-model="drawerRight"
        color="primary"
    >
      <v-list>
        <v-list-subheader elevation="4" class="justify-start align-center">
          <v-btn
              icon
              @click.stop="drawerRight = !drawerRight"
              color="primary"
              variant="flat"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-divider vertical></v-divider>
          <v-btn variant="outlined" class="ml-4" icon="mdi-vector-point"></v-btn>
          <v-btn variant="outlined" class="ml-1"
                 icon="mdi-rectangle-outline"></v-btn>
          <v-btn variant="outlined" class="ml-1"
                 icon="mdi-shape-polygon-plus"></v-btn>

          <v-btn variant="outlined" height="48" width="96" class="rounded-pill ml-4"
                 icon="mdi-trash-can-outline"></v-btn>
        </v-list-subheader>
        <v-divider class="mt-2 mx-2 mb-2"></v-divider>
        <v-list class="px-2">
        </v-list>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
.right-nav-open {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
