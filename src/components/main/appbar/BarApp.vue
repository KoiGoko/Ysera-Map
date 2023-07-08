<template>
  <v-app-bar color="#303F9F" elevation="1" height="48">
    <v-spacer></v-spacer>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" color="transparent" icon>
          <v-toolbar-items class="mr-lg-16">
            <v-btn color="transparent" icon>
              <v-avatar color="grey darken-1" size="32">
                <v-icon dark>mdi-account-circle</v-icon>
              </v-avatar>
            </v-btn>
          </v-toolbar-items>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>个人信息</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>退出登录</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>退出登录</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

</template>
<style>
.v-toolbar .v-avatar {
  margin-right: 300px;
}
</style>


<script setup lang="ts">

</script>
