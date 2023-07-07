<template>
  <DrawMain>
    <v-list density="compact" nav>

      <v-divider></v-divider>
      <v-list-subheader>核应急</v-list-subheader>

      <v-list-item class="d-flex rounded-b-lg" @click="handleClick('success')" :prepend-icon="icons.success"
                   title="撤离成功"
                   value="success"></v-list-item>
      <v-list-item @click="handleClick('failure')" :prepend-icon="icons.failure" title="撤离失败"
                   value="failure"></v-list-item>

      <v-divider></v-divider>

      <v-list-item @click="handleClick('GDP')" :prepend-icon="icons.GDP" title="国民生产总值" value="GDP"></v-list-item>
      <v-list-item @click="handleClick('density')" :prepend-icon="icons.density" title="人口密度"
                   value="density"></v-list-item>

      <v-list-subheader>气象</v-list-subheader>

      <v-list-item @click="handleClick('weather')" :prepend-icon="icons.weather" title="全球气象"
                   value="weather"></v-list-item>
      <v-list-item @click="handleClick('typhoon')" :prepend-icon="icons.typhoon" title="台风情况"
                   value="typhoon"></v-list-item>
      <v-list-item @click="handleClick('inversion')" :prepend-icon="icons.inversion" title="气象反演"
                   value="inversion"></v-list-item>

      <v-divider></v-divider>
      <v-list-subheader>地质</v-list-subheader>


      <v-list-item @click="handleClick('single')" title="个人剂量"
                   value="dose_single"></v-list-item>
      <v-list-item @click="handleClick('multiple')" title="集体计量"
                   value="dose_mutilate"></v-list-item>
      <v-list-item @click="handleClick('other')" title="其他"
                   value="other"></v-list-item>

    </v-list>
  </DrawMain>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";
import DrawMain from "@/components/main/sidebar/Bar.vue";
import {useDrawerIcons} from "@/utils/useDrawerIcons"

const router = useRouter()
const {icons, toggleIcon} = useDrawerIcons({
  icons: {
    index: 'mdi-core-outline',
    land: 'mdi-tree-outline',
    elevation: 'mdi-landslide-outline'
  },
  activeIcons: {
    index: 'mdi-core',
    land: 'mdi-tree',
    elevation: 'mdi-landslide'
  },
  temp: {
    index: 'mdi-core-outline',
    land: 'mdi-tree-outline',
    elevation: 'mdi-landslide-outline'
  }
})
const handleClick = (name: string) => {
  router.push({
    name
  });
  toggleIcon(name);
}
</script>

<style>
</style>

