<template>
  <v-card>
    <v-navigation-drawer
      width="200"
      permanent
      expand-on-hover
      rail
      color="primary"
    >
      <v-list-item
        nav
      >
        <template v-slot:append>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item @click="gdpPush" class="rounded-end-pill" :prepend-icon="icons.GDP" title="国民生产总值" value="GDP"></v-list-item>
        <v-list-item @click="densityPush" class="rounded-end-pill" :prepend-icon="icons.density" title="人口密度" value="density"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import {useRouter, useRoute} from "vue-router";
const router = useRouter()
const icons = reactive({
  GDP: 'mdi-bank-outline',
  density: 'mdi-account-multiple-outline'
})
const originIcons = reactive({
  GDP: 'mdi-bank',
  density: 'mdi-account-multiple'
})
function toggleIcon(button_name: string) {
  if (button_name === 'GDP') {
    icons.GDP = originIcons.GDP
    icons.density = 'mdi-account-multiple-outline'
  } else if (button_name === 'density') {
    icons.GDP = 'mdi-bank-outline'
    icons.density = originIcons.density
  }
}
function gdpPush() {
  router.push({
    name: 'gdp'
  })
  toggleIcon('GDP')
}
function densityPush() {
  router.push({
    name: 'density'
  })
  toggleIcon('density')
}

</script>


<style>
.rounded-end-pill {
  border-end-end-radius: 30px;
  border-top-right-radius: 30px;
}
</style>
