<script setup lang="ts">
import {ref} from "vue";

const drawerRight = ref(false)

</script>

<template>
  <div>
    <v-btn class="right-nav-open" @click="drawerRight = !drawerRight"
           icon
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-navigation-drawer
      location="right"
      width="364"
      v-model="drawerRight"
      temporary
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

      <router-view name="home"></router-view>

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
