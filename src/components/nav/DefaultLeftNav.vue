<script setup lang="ts">
import {computed} from "vue";
import {useLayoutSize} from '@/store/LayoutSize.ts'
import {useLeftDrawer} from "@/store/LeftDrawer.ts";

const leftNavMainWidth = computed(() => useLayoutSize().leftNavMainWidth)
const toggleDrawer = () => {
  useLeftDrawer().toggleDrawer()
}
</script>

<template>
  <v-navigation-drawer
      class="px-0"
      location="left"
      :width="leftNavMainWidth"
      permanent
      color="primary"
      elevation="2"
  >
    <v-list nav>
      <v-list-item>
        <v-btn
            @click.stop="toggleDrawer"
            icon
            variant="text"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-list-item class="mb-4">
            <v-btn variant="tonal"
                   v-bind="props"
                   icon="mdi-account"
            >
            </v-btn>
          </v-list-item>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar

              >
                <v-icon>mdi-account</v-icon>
              </v-avatar>
              <h3>Nan Jia</h3>
              <p class="text-caption mt-1">
                KoiGoko@outlook.com
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                  rounded
                  variant="text"
              >
                <span>编辑</span>
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                  rounded
                  variant="text"
              >
                <span>退出</span>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </template>
  </v-navigation-drawer>

</template>
<style scoped>
</style>
