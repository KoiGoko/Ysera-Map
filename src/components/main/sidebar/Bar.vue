<template>
  <v-navigation-drawer
    v-model="drawer"
    width="240"
    elevation="0"
    class="rounded-0 ml-6 pr-lg-10 bg-grey-lighten-3"
    @transitionend="handleTransitionEnd"
    floating
  >
    <slot/>

  </v-navigation-drawer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const drawer = ref(true)
const isCollapsed = ref(false)

const handleTransitionEnd = () => {
  isCollapsed.value = !drawer.value
}
</script>

<style scoped>
.rounded-button {
  transition: border-radius 0.3s;
}

.rounded-pill {
  border-radius: 16px;
}

.v-navigation-drawer-enter-active .rounded-button {
  border-radius: 50%;
}

.v-navigation-drawer-leave-active .rounded-button {
  border-radius: 16px;
}
</style>
