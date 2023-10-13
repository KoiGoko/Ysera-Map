<script setup lang="ts">
import {ref} from "vue";
import {useMapControl} from "@/store/mapControl.ts";
const drawerRight = ref(false)

const collapseMap = () => {
  useMapControl().collapseControl(0, 0, true)
}

</script>
<template>
  <div>
    <v-btn class="right-nav-open" @click="drawerRight = !drawerRight, collapseMap()"
           icon
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-navigation-drawer
      location="right"
      width="364"
      v-model="drawerRight"
    >
      <v-list>
        <v-list-subheader class="justify-start align-center">
          <v-btn
            icon
            @click.stop="drawerRight = !drawerRight"
            color="primary"
            variant="text"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-subheader>
        <v-divider class="mt-2 mx-2"></v-divider>
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
