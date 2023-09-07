<template>
  <v-app>
    <!--map main-->
    <div>
      <router-view name="map"></router-view>
    </div>

    <!--no map main-->
    <v-main>
      <router-view name="no-map-main"></router-view>
    </v-main>

    <!--left-->
    <div>
      <router-view name="left"></router-view>
    </div>

    <!--right-->
    <div>
      <router-view name="right"></router-view>
    </div>

    <!--top-->
    <div>
      <router-view name="top"></router-view>
    </div>

    <!--bottom-->
    <div>
      <router-view name="bottom"></router-view>
    </div>
  </v-app>
</template>

<script lang="ts" setup>

</script>

<style scoped>
</style>
