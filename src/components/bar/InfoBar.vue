<script setup lang="ts">
import {computed, ref} from "vue";
import {useInfoBar} from "@/store/infoBar.ts";

const closeInfoBar1 = ref(true);

const infoBarStatus = computed(() => useInfoBar().infoBarStatus)
const closeInfoBar = () => {
  useInfoBar().closeInfoBar()
}

</script>
<template>
  <div v-show="infoBarStatus">
    <v-card color="white" elevation="4" class="info-card rounded-xl mr-2 mt-2" width="400" height="90%">
      <v-list bg-color="white" height="85%" class="px-1">
        <v-list-item class="rounded-lg" elevation="4" height="200">

        </v-list-item>

        <v-divider class="mt-2"></v-divider>

        <v-list-item class="rounded-lg" elevation="4" height="200">

        </v-list-item>

      </v-list>
      <v-card-item class="d-flex justify-end mt-7">
        <v-btn height="48" width="96"
               class="rounded-pill mr-4"
               color="secondary"
               @click="closeInfoBar"
               variant="flat">
          <span>退 出</span>
        </v-btn>
      </v-card-item>
    </v-card>
  </div>
</template>
<style scoped>
.info-card {
  position: absolute;
  top: 0px;
  right: 364px;
}
</style>
