<script setup lang="ts">
import {computed, ref} from "vue"
import {useMapStyle} from "@/store/mapStyle";
import {useStyleAvatar} from "@/store/styleAvatar.ts";
const switchLayer = (name: string) => {
  useMapStyle().getMapStyle(name);
};
const styleItems = computed(() => useStyleAvatar().styleItems)
</script>

<template>
  <div class="switch-menu">
    <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn class="mb-3" icon
             v-bind="props"
      >
        <v-icon>mdi-map</v-icon>
      </v-btn>
    </template>
    <v-card width="240">
      <v-card-text>
        <div class="mx-auto text-center">
          <h4>地图</h4>
          <v-divider class="my-3"></v-divider>
          <v-list nav>
            <v-list-item
                v-for="(item, i) in styleItems"
                :key="i"
                :value="item"
                class="mt-2 rounded"
                @click="switchLayer(item.name)"
                :prepend-avatar="item.avatar"
                elevation="1"
            >
              <v-list-item-title>
                <span class="font-weight-medium">{{item.name}}</span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
  </div>
</template>

<style scoped>
</style>
