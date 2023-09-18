<script setup lang="ts">
import {ref} from "vue";

const drawerRight = ref(false)

const show = ref(false)

</script>

<template>
  <v-card
      width="380"
      class="stations-process-card d-flexr">
    <v-card-title>
      <span>气象站工具</span>

    </v-card-title>

    <v-divider class="mx-2"></v-divider>

    <v-card-item class="justify-center">
      <v-btn-toggle
          divided
          variant="outlined"
      >
        <v-btn width="72" icon="mdi-format-align-left"></v-btn>
        <v-btn width="72" icon="mdi-format-align-center"></v-btn>
        <v-btn width="72" icon="mdi-format-align-right"></v-btn>
        <v-btn @click="show = !show" width="72" icon="mdi-format-align-justify"></v-btn>
      </v-btn-toggle>
    </v-card-item>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-radio-group class="mx-5 mt-2">
          <v-radio label="Radio 1" value="1"></v-radio>

          <v-card-item>
            <p>
              <span>Nan Jia</span>
              <input style="border: solid 1px; width: 72px;height: 26px">
              <select class="ml-2" style="border: solid 1px; width: 72px; height: 26px">
                <option>1</option>
                <option>2</option>
              </select>

              <v-btn class="ml-2 mb-1" variant="outlined" height="26" width="48">summit</v-btn>
            </p>

            <p>
              <span>Nan Jia</span>
              <input style="border: solid 1px; width: 72px;height: 26px">
              <select class="ml-2" style="border: solid 1px; width: 72px; height: 26px">
                <option>1</option>
                <option>2</option>
              </select>

              <v-btn class="ml-2 mb-1" variant="outlined" height="26" width="48">summit</v-btn>
            </p>
          </v-card-item>
          <v-radio label="Radio 2" value="2"></v-radio>

          <v-card-item>
            <p>
              <span>Nan Jia</span>
              <input style="border: solid 1px; width: 72px;height: 26px">
              <select class="ml-2 custom-select" style="border: solid 1px; width: 72px; height: 26px">
                <option>1</option>
                <option>2</option>
              </select>

              <v-btn class="ml-2 mb-1" variant="outlined" height="26" width="48">summit</v-btn>
            </p>

            <p>
              <span>Nan Jia</span>
              <input style="border: solid 1px; width: 72px;height: 26px">
              <select class="ml-2" style="border: solid 1px; width: 72px; height: 26px">
                <option>1</option>
                <option>2</option>
              </select>

              <v-btn class="ml-2 mb-1" variant="outlined" height="26" width="48">summit</v-btn>
            </p>
          </v-card-item>
        </v-radio-group>

      </div>
    </v-expand-transition>
  </v-card>
</template>

<style scoped>
.stations-process-card {
  position: absolute;
  top: 8px;
  right: 8px;
}

</style>
