<template>
  <v-card>
    <v-navigation-drawer
      expand-on-hover
      rail
      width="200"
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
        <v-list-item @click="successPush" class="rounded-end-pill" :prepend-icon="icons.success" title="撤离成功" value="success"></v-list-item>
        <v-list-item @click="failurePush" class="rounded-end-pill"  :prepend-icon="icons.failure" title="撤离失败" value="failure"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import {useRouter, useRoute} from "vue-router";
const router = useRouter()
const icons = reactive({
  success: 'mdi-run',
  failure: 'mdi-alert-circle-outline'
})
const originIcons = reactive({
  success: 'mdi-run-fast',
  failure: 'mdi-alert-circle'
})
const toggleIcon = (button_name: string) => {
  if (button_name === 'success') {
    icons.success = originIcons.success
    icons.failure = 'mdi-alert-circle-outline'
  } else if (button_name === 'failure') {
    icons.success = 'mdi-run'
    icons.failure = originIcons.failure
  }
}
function successPush() {
  router.push({
    name: 'success'
  })
  toggleIcon('success')
}
function failurePush() {
  router.push({
    name: 'failure'
  })
  toggleIcon('failure')
}
</script>


<style>
.rounded-end-pill {
  border-end-end-radius: 30px;
  border-top-right-radius: 30px;
}
</style>
