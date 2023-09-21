<script lang="ts">
export default {
  data: () => ({
    items: Array.from({length: 1000}, (k, v) => v + 1),
  }),
}
</script>

<template>
  <v-card
    class="mx-auto stations-info h-100"
    width="380"
  >
    <v-virtual-scroll
      :items="items"
      item-height="72"
      height="100%"
    >
      <template v-slot:default="{ item }">
        <v-list-item
          :key="item"
          :value="item"
        >
          <v-list-item-title><span>Nan Jia</span></v-list-item-title>
          <template v-slot:append>
            <v-btn
              size="small"
              variant="tonal"
            >
              View User

              <v-icon
                color="orange-darken-4"
                end
              >
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </template>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<style scoped>
.stations-info {
  position: absolute;
  left: 80px;
  top: 0px;
}
</style>
