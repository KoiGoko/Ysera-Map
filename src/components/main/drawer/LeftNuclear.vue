<template>
  <v-card>
    <v-navigation-drawer
      width="200"
      expand-on-hover
      rail
      permanent
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
        <v-list-item @click="singlePush" class="rounded-end-pill" :prepend-icon="icons.dose_single" title="个人剂量" value="dose_single"></v-list-item>
        <v-list-item @click="mutilatePush" class="rounded-end-pill" :prepend-icon="icons.dose_mutilate" title="集体计量" value="dose_mutilate"></v-list-item>
        <v-list-item @click="otherPush" class="rounded-end-pill" :prepend-icon="icons.other" title="其他" value="other"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import {useRouter, useRoute} from "vue-router";
const router = useRouter()
const icons = reactive({
  dose_single: 'mdi-account-outline',
  dose_mutilate: 'mdi-account-group-outline',
  other: 'mdi-circle-outline'
})
const originIcons = reactive({
  dose_single: 'mdi-account',
  dose_mutilate: 'mdi-account-group',
  other: 'mdi-circle'
})
function toggleIcon(button_name: string) {
  if (button_name === 'dose_single') {
    icons.dose_single = originIcons.dose_single
    icons.dose_mutilate = 'mdi-account-group-outline'
    icons.other = 'mdi-circle-outline'
  } else if (button_name === 'dose_mutilate') {
    icons.dose_single = 'mdi-account-outline'
    icons.dose_mutilate = originIcons.dose_mutilate
    icons.other = 'mdi-circle-outline'
  } else if (button_name === 'other') {
    icons.dose_single = 'mdi-account-outline'
    icons.dose_mutilate = 'mdi-account-group-outline'
    icons.other = originIcons.other
  }
}
function singlePush() {
  router.push({
    name:'single'
  })
  toggleIcon('dose_single')
}
function mutilatePush() {
  router.push({
    name:'multiple'
  })
  toggleIcon('dose_mutilate')
}
function otherPush() {
  router.push({
    name:'other'
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
