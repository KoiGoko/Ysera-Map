<template>
  <v-app class="NotoFont">

    <div class="container">
      <!-- 左侧抽屉 -->
      <div class="drawer">
        <router-view name="left"></router-view>
      </div>

      <!-- 地图主区域 -->
      <div class="map-container">
        <router-view name="map"></router-view>
      </div>

      <v-main>
        <router-view name="main"></router-view>
      </v-main>

      <div>
        <router-view name="right"></router-view>
      </div>

      <div>
        <router-view name="top"></router-view>
      </div>

      <div>
        <router-view name="bottom"></router-view>
      </div>
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

.container {
  position: relative;
  display: flex;
  width: auto;
  height: 100vh;
}
.map-container {
  position: absolute;
  left: 80px;
  width: calc(100% - 80px); /* 浏览器宽度减去抽屉宽度 */
  height: 100%;
}
</style>
