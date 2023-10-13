<template>
  <v-app>
    <!--map main-->
    <div>
      <router-view name="map"></router-view>
    </div>

    <v-main>
      <router-view name="main"></router-view>
    </v-main>

    <div>
      <router-view name="left"></router-view>
    </div>

    <div>
      <router-view name="right"></router-view>
    </div>

    <div>
      <router-view name="top"></router-view>
    </div>

    <div>
      <router-view name="bottom"></router-view>
    </div>
  </v-app>
</template>

<script lang="ts" setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@500&family=Noto+Sans:wght@500&display=swap');

.NotoFont {
  font-family: 'Noto Sans SC', sans-serif;
}
</style>
