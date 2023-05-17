<!--<template>-->
<!--  <v-card>-->
<!--    <v-navigation-drawer-->
<!--      rail-->
<!--      v-model="drawer"-->
<!--      expand-on-hover-->
<!--      width="180"-->
<!--      permanent-->
<!--      color="primary"-->
<!--      elevation="0"-->
<!--      class="rounded"-->
<!--    >-->
<!--      <slot/>-->
<!--      <v-divider class="pa-2"></v-divider>-->
<!--      <template v-slot:append>-->
<!--        <div class="pa-2">-->
<!--          <v-btn class="bg-blue-lighten-4 mb-2 rounded-circle" elevation="0" block></v-btn>-->
<!--          <v-btn class="bg-blue-lighten-4 mb-2 rounded-button" elevation="0" block></v-btn>-->
<!--          <v-btn class="bg-blue-lighten-4 rounded-button" elevation="0" block></v-btn>-->
<!--        </div>-->
<!--      </template>-->
<!--    </v-navigation-drawer>-->
<!--  </v-card>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import { ref } from 'vue'-->

<!--const drawer = ref(true)-->
<!--</script>-->

<!--<style scoped>-->
<!--.rounded-button {-->
<!--  border-radius: 50%;-->
<!--}-->
<!--</style>-->
<template>
  <v-card>
    <v-navigation-drawer
      rail
      v-model="drawer"
      expand-on-hover
      width="180"
      permanent
      color="primary"
      elevation="0"
      class="rounded"
      @transitionend="handleTransitionEnd"
    >
      <slot />

      <v-divider class="pa-2"></v-divider>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            class="bg-blue-lighten-4 mb-2 rounded-button"
            elevation="2"
            height="40"
            block
            :class="{ 'rounded-pill': !isCollapsed }"
          ></v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
