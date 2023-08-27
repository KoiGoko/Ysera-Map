<script setup lang="ts">

</script>

<template>
  <div>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="auto">
          <v-card height="54" width="350" class="rounded-pill search-card">
            <v-text-field
                color="primary"
                variant="solo"
                prepend-inner-icon="mdi-magnify"
                append-inner-icon="mdi-close"
                hide-details
                placeholder="Search"
            ></v-text-field>
          </v-card>
      </v-col>
      <v-spacer></v-spacer>

      <v-col cols="auto" class="mr-2">
        <div>
          <v-btn>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </div>

      </v-col>
    </v-row>
  </div>

</template>

<style scoped>
.search-card {
  display: flex;
  left: calc(72px + 8px);
}

.account-btn {
  display: flex;
}

</style>
