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
      color="background"
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
      <v-dialog width="500">
        <template v-slot:activator="{ props }">
          <v-list-item class="mb-4">
            <v-btn
                variant="flat"
                v-bind="props"
                icon="mdi-account-circle"
            >
            </v-btn>
          </v-list-item>
        </template>

        <template v-slot:default="{}">
          <v-card color="background" width="400" height="300" class="rounded-xl pa-2">
            <v-card-text>
              <div class="mx-auto text-center">
                <v-avatar variant="outlined"
                >
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
                <h3>Nan Jia</h3>
                <p class="text-caption mt-2">
                  KoiGoko@outlook.com
                </p>
                <v-divider class="my-2"></v-divider>
                <v-btn
                    rounded
                    variant="flat"
                    class="mt-1"
                >
                  <span class="font-weight-bold">编辑</span>
                </v-btn>
                <v-divider class="my-2"></v-divider>
                <v-btn
                    rounded
                    variant="outlined"
                    class="mt-1"
                >
                  <span class="font-weight-bold">退出</span>
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
    </template>
  </v-navigation-drawer>
</template>
<style scoped>
</style>
