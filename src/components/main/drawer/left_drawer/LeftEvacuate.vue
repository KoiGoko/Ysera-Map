<template>
  <DrawMain>
    <v-list density="compact" nav>
      <v-list-item @click="handleClick('success')" class="rounded-end-pill" :prepend-icon="icons.success" title="撤离成功" value="success"></v-list-item>
      <v-list-item @click="handleClick('failure')" class="rounded-end-pill"  :prepend-icon="icons.failure" title="撤离失败" value="failure"></v-list-item>
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
    success: 'mdi-run',
    failure: 'mdi-alert-circle-outline'
  },
  activeIcons: {
    success: 'mdi-run-fast',
    failure: 'mdi-alert-circle'
  },
  temp: {
    success: 'mdi-run',
    failure: 'mdi-alert-circle-outline'
  }
})
const handleClick = (name: string) => {
  router.push({
    name
  });
  toggleIcon(name);
}
</script>

<style>
.rounded-end-pill {
  border-end-end-radius: 30px;
  border-top-right-radius: 30px;
}
</style>
