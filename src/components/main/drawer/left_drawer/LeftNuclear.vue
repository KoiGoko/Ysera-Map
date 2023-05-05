<template>
  <DrawMain>
    <v-list density="compact" nav>
      <v-list-item @click="singlePush" class="rounded-end-pill" :prepend-icon="icons.dose_single" title="个人剂量"
                   value="dose_single"></v-list-item>
      <v-list-item @click="mutilatePush" class="rounded-end-pill" :prepend-icon="icons.dose_mutilate" title="集体计量"
                   value="dose_mutilate"></v-list-item>
      <v-list-item @click="otherPush" class="rounded-end-pill" :prepend-icon="icons.other" title="其他"
                   value="other"></v-list-item>
    </v-list>
  </DrawMain>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import DrawMain from "@/components/main/drawer/DrawMain.vue";
import {useDrawerIcons} from "@/utils/useDrawerIcons"

const router = useRouter()
const {icons, toggleIcon} = useDrawerIcons({
  icons: {
    dose_single: 'mdi-account-outline',
    dose_mutilate: 'mdi-account-group-outline',
    other: 'mdi-circle-outline'
  },
  activeIcons: {
    dose_single: 'mdi-account',
    dose_mutilate: 'mdi-account-group',
    other: 'mdi-circle'
  },
  temp: {
    dose_single: 'mdi-account-outline',
    dose_mutilate: 'mdi-account-group-outline',
    other: 'mdi-circle-outline'
  }
})

function singlePush() {
  router.push({
    name: 'single'
  })
  toggleIcon('dose_single')
}

function mutilatePush() {
  router.push({
    name: 'multiple'
  })
  toggleIcon('dose_mutilate')
}

function otherPush() {
  router.push({
    name: 'other'
  })
  toggleIcon('other')
}
</script>


<style>
.rounded-end-pill {
  border-end-end-radius: 30px;
  border-top-right-radius: 30px;
}
</style>
