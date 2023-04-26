<template>
  <DrawMain>
    <v-list density="compact" nav>
      <v-list-item @click="gdpPush" class="rounded-end-pill" :prepend-icon="icons.GDP" title="国民生产总值" value="GDP"></v-list-item>
      <v-list-item @click="densityPush" class="rounded-end-pill" :prepend-icon="icons.density" title="人口密度" value="density"></v-list-item>
    </v-list>
  </DrawMain>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import DrawMain from "@/components/main/drawer/DrawMain.vue";
import {useDrawerIcons} from "@/utils/useDrawerIcons"
const router = useRouter()
const {icons, toggleIcon} = useDrawerIcons({
  icons: {
    GDP: 'mdi-bank-outline',
    density: 'mdi-account-multiple-outline'
  },
  activeIcons: {
    GDP: 'mdi-bank',
    density: 'mdi-account-multiple'
  },
  temp: {
    GDP: 'mdi-bank-outline',
    density: 'mdi-account-multiple-outline'
  }
})

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
