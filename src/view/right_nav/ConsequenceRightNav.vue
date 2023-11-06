<script setup lang="ts">
import {ref} from "vue";
import RightMenuIcon from "@/components/bar/RightMenuIcon.vue";

const drawerRight = ref(true)

</script>
<template>

  <div>
    <v-btn color="primary" class="right-nav-open" @click="drawerRight = !drawerRight"
           icon
           elevation="1"
    >
      <RightMenuIcon></RightMenuIcon>
    </v-btn>
    <v-navigation-drawer
        location="right"
        width="420"
        height="100%"
        v-model="drawerRight"
        color="white"
        class="pa-2"
    >
      <v-list-subheader color="black"
                        class="d-flex justify-center"
      >
        <h1>Ysera Map灾害模拟分析</h1>
      </v-list-subheader>
      <v-divider class="mt-1"></v-divider>
      <v-list-item>
        <v-list-item-subtitle color="red">第一步：选择模拟地点</v-list-item-subtitle>
        <v-list-item class="px-0 py-0">
          经度 <input style="width: 96px; border: 1px">
          维度 <input style="width: 96px; border: 1px">
        </v-list-item>
        <v-list-item class="px-0 py-0">
          或者选择地图上的点
          <v-btn width="96" color="red" variant="flat" class="rounded-pill"></v-btn>
        </v-list-item>
      </v-list-item>
      <v-list-item class="mt-2">
        <v-list-item-subtitle color="red">第二步：选择事故源项</v-list-item-subtitle>
        <v-list-item class="px-0 py-0 mt-2">
          <v-select
              density="compact"
              clearable
              chips
              :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'
                      ,'California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'
              ]"
              variant="solo"
          ></v-select>
        </v-list-item>
      </v-list-item>

      <v-list-item class="mt-2">
        <v-list-item-subtitle color="red">第三步：选择模拟开始时间</v-list-item-subtitle>
        <v-list-item class="px-0 py-0 mt-2">
          <v-date-picker></v-date-picker>
        </v-list-item>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
.right-nav-open {
  position: absolute;
  top: 8px;
  right: 8px;
}

.font-size {
  font-size: 10px;
}
</style>
